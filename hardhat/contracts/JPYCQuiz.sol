//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";
import {IJPYCQuizRewardNFT} from "./JPYCQuizRewardNFT.sol";

contract JPYCQuiz is Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    event LogSetQuestionInfo(uint256 indexed questionId_);
    event LogUserAnswer(address indexed userAddress_, bool hasPassed_);
    event LogMintReward(address indexed userAddress_, bool isAdmin_);

    struct QuestionInfo {
        uint256 questionID; // QuestionID starts with 1
        string question;
        string[] selectionLabels;
        string[] selectionIDs;
        string solutionHash; // Store solution in a hash format
        bool useBinarySelections;
    }

    struct QuizEvent {
        string quizName;
        uint256 minNumOfPasses; // If correct answers surpass minimumNumOfPasses, user can pass the quiz.
        QuestionInfo[] questionsInfo;
        bool quizEnded;
        uint256 versionID; // Increment this value when updating the quiz
    }

    struct UserAnswerHistory {
        bool hasSentCorrectAnswer;
        UserAnswer[] answers;
    }

    struct UserAnswer {
        bool hasPassed;
        string[] hashes; // Store answers in a hash format
    }

    // First map: user address to map of second map
    // Second map: event versionID to user answer history
    mapping(address => mapping(uint256 => UserAnswerHistory)) _userAnserStatusMap;
    QuizEvent public _quizEvent;
    IJPYCQuizRewardNFT public _mintRewardContract;
    Counters.Counter private _eventVersionID;

    constructor(address mintRewardContract_) {
        _mintRewardContract = IJPYCQuizRewardNFT(mintRewardContract_);
    }

    function getQuizEvent()
        public
        view
        returns (
            string memory quizName,
            uint256 numOfQuestions,
            uint256 minNumOfPasses,
            bool quizEnded
        )
    {
        quizName = _quizEvent.quizName;
        numOfQuestions = _quizEvent.questionsInfo.length;
        minNumOfPasses = _quizEvent.minNumOfPasses;
        quizEnded = _quizEvent.quizEnded;
    }

    function getQuestionInfo(uint256 questionID_)
        public
        view
        returns (
            uint256 questionID,
            string memory question,
            string[] memory selectionLabels,
            string[] memory selectionIDs,
            bool useBinarySelections
        )
    {
        QuestionInfo memory questionInfo = _quizEvent.questionsInfo[
            questionID_.sub(1)
        ];
        questionID = questionInfo.questionID;
        question = questionInfo.question;
        selectionLabels = questionInfo.selectionLabels;
        selectionIDs = questionInfo.selectionIDs;
        useBinarySelections = questionInfo.useBinarySelections;
    }

    function compareStrings(string memory a_, string memory b_)
        private
        pure
        returns (bool)
    {
        return
            keccak256(abi.encodePacked(a_)) == keccak256(abi.encodePacked(b_));
    }

    function mintReward(bool isAdmin_) private {
        _mintRewardContract.mintFromRewardCaller(_msgSender());

        emit LogMintReward(_msgSender(), isAdmin_);
    }

    function ownerMintRewardBypassCheck() public onlyOwner {
        mintReward(true);
    }

    function setMintRewardContract(address mintRewardContract_)
        public
        onlyOwner
    {
        _mintRewardContract = IJPYCQuizRewardNFT(mintRewardContract_);
    }

    function setQuestionInfo(
        uint256 questionID_,
        string[] memory selectionLabels_,
        string[] memory selectionIDs_,
        string memory solutionHash_,
        bool useBinarySelections_
    ) public onlyOwner {
        QuestionInfo storage questionInfo = _quizEvent.questionsInfo[
            questionID_.sub(1)
        ];
        uint256 selectionSize = selectionLabels_.length;
        require(
            selectionIDs_.length == selectionSize,
            "Number of IDs and labels do not match"
        );

        questionInfo.selectionLabels = selectionLabels_;
        questionInfo.solutionHash = solutionHash_;
        questionInfo.selectionIDs = selectionIDs_;
        questionInfo.useBinarySelections = useBinarySelections_;

        emit LogSetQuestionInfo(questionID_);
    }

    function setQuestionStatement(uint256 questionID_, string memory question_)
        public
        onlyOwner
    {
        _quizEvent.questionsInfo[questionID_.sub(1)].question = question_;
    }

    function setQuizEventAndQuestionsSkelton(
        string memory quizName_,
        string[] memory questions_,
        uint256 minNumOfPasses_
    ) public onlyOwner {
        uint256 sentNumOfQuestions = questions_.length;
        require(
            sentNumOfQuestions >= minNumOfPasses_,
            "minNumOfPasses_ cannot be more than sentNumOfQuestions"
        );
        require(minNumOfPasses_ > 0, "minNumOfPasses_ should be more than 0");

        QuestionInfo[] memory questionsInfo = new QuestionInfo[](
            sentNumOfQuestions
        );
        for (uint256 i = 0; i < sentNumOfQuestions; i = i.add(1)) {
            questionsInfo[i].questionID = i + 1;
            questionsInfo[i].question = questions_[i];
        }

        _quizEvent.quizName = quizName_;
        _quizEvent.minNumOfPasses = minNumOfPasses_;
        _eventVersionID.increment();
        _quizEvent.versionID = _eventVersionID.current();
        for (uint256 i = 0; i < sentNumOfQuestions; i = i.add(1)) {
            _quizEvent.questionsInfo.push();
            _quizEvent.questionsInfo[i] = questionsInfo[i];
        }
    }

    function getIsUserPassed() public view returns (bool) {
        return
            _userAnserStatusMap[_msgSender()][_eventVersionID.current()]
                .hasSentCorrectAnswer;
    }

    function setUserAnswerHashes(string[] memory answerHashes_) public {
        require(
            answerHashes_.length == _quizEvent.questionsInfo.length,
            "Not enough answers"
        );
        require(!getIsUserPassed(), "User already solved this quiz.");

        UserAnswerHistory storage history = _userAnserStatusMap[_msgSender()][
            _eventVersionID.current()
        ];

        uint256 numOfCorrectAnswers = 0;
        for (uint256 i = 0; i < answerHashes_.length; i = i.add(1)) {
            if (
                compareStrings(
                    answerHashes_[i],
                    _quizEvent.questionsInfo[i].solutionHash
                )
            ) {
                numOfCorrectAnswers = numOfCorrectAnswers.add(1);
            }
        }

        bool hasPassed = numOfCorrectAnswers >= _quizEvent.minNumOfPasses;
        if (hasPassed) {
            mintReward(false);
            history.hasSentCorrectAnswer = hasPassed;
        }

        history.answers.push(
            UserAnswer({hasPassed: hasPassed, hashes: answerHashes_})
        );

        emit LogUserAnswer(_msgSender(), hasPassed);
    }

    function setQuizEnd(bool quizEnded_) public onlyOwner {
        _quizEvent.quizEnded = quizEnded_;
    }

    function setQuizName(string memory quizName_) public onlyOwner {
        _quizEvent.quizName = quizName_;
    }

    function setMinNumOfPasses(uint256 minNumOfPasses_) public onlyOwner {
        _quizEvent.minNumOfPasses = minNumOfPasses_;
    }

    function getAnswerHistories()
        public
        view
        returns (bool hasSentCorrectAnswer, bool[] memory hasPassedList)
    {
        UserAnswerHistory memory history = _userAnserStatusMap[_msgSender()][
            _eventVersionID.current()
        ];
        hasSentCorrectAnswer = history.hasSentCorrectAnswer;
        UserAnswer[] memory answers = history.answers;

        hasPassedList = new bool[](answers.length);
        for (uint256 i = 0; i < answers.length; i = i.add(1)) {
            hasPassedList[i] = answers[i].hasPassed;
        }
    }

    function getCurrentEventVersionID() public view returns (uint256) {
        return _eventVersionID.current();
    }
}
