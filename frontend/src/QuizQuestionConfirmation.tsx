import { Table, Thead, Tr, Th, Tbody, Center, Link, Td, Text } from "@chakra-ui/react";
import { useCallback } from "react";
import QuizConfirmationButton from "./QuizConfirmationButton";
import { AnswerType, QuestionType, useQuizContext } from "./QuizContextProvider";
import QuizQuestionBase from "./QuizQuestionBase";

export default function QuizQuestionConfirmation() {
    const {
        answers,
        questions,
        questionSize,
    } = useQuizContext();

    const hasMissingAnswers = answers.some(answer => answer.selectionID == null);

    return (
        <QuizQuestionBase>
            <ScrollTopShadow />
            <div style={{
                marginTop: 12,
                width: "100%",
                maxHeight: "350px",
                overflow: "auto",
                paddingBottom: "1px"
            }}>
                <Table
                    variant="unstyled"
                    colorScheme="white"
                    bgColor="rgba(0, 0, 0, 0.5)"
                    color="white"
                    marginTop="1px"
                    borderRadius="16px"
                >
                    <Thead>
                        <Tr borderBottomWidth="1px" borderBottomColor="white">
                            <Th fontSize="18px" fontWeight="900" width="70%">質問</Th>
                            <Th fontSize="18px" fontWeight="900">回答</Th>
                            <Th fontSize="18px" fontWeight="900" width="110px"></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {questions.map((question, index) => {
                            return (
                                <QuestionConfirmationRow
                                    targetQuestion={question}
                                    targetAnswer={answers[index]}
                                    isLastRow={(questionSize - 1) === index}
                                />
                            );
                        })}
                    </Tbody>
                </Table>
            </div>
            <ScrollBottomShadow />
            <Center paddingTop="8px">
                <QuizConfirmationButton />
            </Center>
        </QuizQuestionBase>
    );
}

function QuestionConfirmationRow({
    targetQuestion,
    targetAnswer,
    isLastRow,
}: {
    targetQuestion: QuestionType,
    targetAnswer: AnswerType,
    isLastRow: boolean,
}) {
    const {
        setCurrentQuestionID,
    } = useQuizContext();
    const onLinkClick = useCallback(() => {
        setCurrentQuestionID(targetQuestion.questionID);
    }, [setCurrentQuestionID, targetQuestion.questionID]);

    const combinedTargetQuestion = targetQuestion.selectionIDs.map(
        (selectionID, index) => {
            return {
                selectionID,
                selectionLabel: targetQuestion.selectionLabels[index],
            };
        }
    );

    return (
        <Tr
            borderBottomWidth={isLastRow ? undefined : "1px"}
            borderBottomColor={isLastRow ? undefined : "white"}
        >
            <Td><Text noOfLines={2}>{targetQuestion.question}</Text></Td>
            <Td><Text noOfLines={2}>{
                combinedTargetQuestion.find(
                    target => target.selectionID === targetAnswer.selectionID
                )?.selectionLabel ?? "未回答"
            }</Text></Td>
            <Td><Link onClick={onLinkClick}>修正する</Link></Td>
        </Tr>
    );
}

function ScrollTopShadow() {
    return (
        <div style={{ marginTop: 0, position: "relative", width: "100%" }}>
            <hr style={{
                width: "100%",
                position: "absolute",
                top: 13,
                left: 0,
                border: 0,
                height: 12,
                boxShadow: "inset 0 12px 12px -12px rgba(95, 171, 221, 0.85)",
            }} />
        </div>
    );
}

function ScrollBottomShadow() {
    return (
        <div style={{ marginTop: 0, position: "relative", width: "100%" }}>
            <hr style={{
                width: "100%",
                position: "absolute",
                top: -12,
                left: 0,
                border: 0,
                height: 12,
                boxShadow: "inset 0 -12px 12px -12px rgba(52, 119, 197, 0.85)",
            }} />
        </div>
    );
}