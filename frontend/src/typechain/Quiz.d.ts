/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface QuizInterface extends ethers.utils.Interface {
  functions: {
    "_mintRewardContract()": FunctionFragment;
    "_quizEvents(uint256)": FunctionFragment;
    "addQuizEventAndQuestionsSkelton(string,string[],uint256)": FunctionFragment;
    "compareStrings(string,string)": FunctionFragment;
    "getAllQuizEvents()": FunctionFragment;
    "getQuestionInfo(uint256,uint256)": FunctionFragment;
    "getSingleQuizEvent(uint256)": FunctionFragment;
    "setMintRewardContract(address)": FunctionFragment;
    "setQuestionInfo(uint256,uint256,string[],string[],string)": FunctionFragment;
    "setUserAnswerHashes(uint256,string[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_mintRewardContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_quizEvents",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addQuizEventAndQuestionsSkelton",
    values: [string, string[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "compareStrings",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllQuizEvents",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getQuestionInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSingleQuizEvent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMintRewardContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setQuestionInfo",
    values: [BigNumberish, BigNumberish, string[], string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserAnswerHashes",
    values: [BigNumberish, string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "_mintRewardContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_quizEvents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addQuizEventAndQuestionsSkelton",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compareStrings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllQuizEvents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuestionInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSingleQuizEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMintRewardContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setQuestionInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserAnswerHashes",
    data: BytesLike
  ): Result;

  events: {
    "LogMintReward(address,uint256)": EventFragment;
    "LogQuizEventID(uint256)": EventFragment;
    "LogQuizQuestionID(uint256,uint256)": EventFragment;
    "LogUserAnswer(address,uint256,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogMintReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogQuizEventID"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogQuizQuestionID"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUserAnswer"): EventFragment;
}

export type LogMintRewardEvent = TypedEvent<
  [string, BigNumber] & { userAddress_: string; quizEventID_: BigNumber }
>;

export type LogQuizEventIDEvent = TypedEvent<
  [BigNumber] & { eventQuizId_: BigNumber }
>;

export type LogQuizQuestionIDEvent = TypedEvent<
  [BigNumber, BigNumber] & { questionId_: BigNumber; quizEventId_: BigNumber }
>;

export type LogUserAnswerEvent = TypedEvent<
  [string, BigNumber, boolean] & {
    userAddress_: string;
    quizEventID_: BigNumber;
    hasPassed_: boolean;
  }
>;

export class Quiz extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: QuizInterface;

  functions: {
    _mintRewardContract(overrides?: CallOverrides): Promise<[string]>;

    _quizEvents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        quizEventID: BigNumber;
        quizName: string;
        minNumOfPasses: BigNumber;
      }
    >;

    addQuizEventAndQuestionsSkelton(
      quizName_: string,
      questions_: string[],
      minNumOfPasses_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compareStrings(
      a_: string,
      b_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getAllQuizEvents(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[], BigNumber[]] & {
        quizEventIDs: BigNumber[];
        quizNames: string[];
        numOfQuestions: BigNumber[];
      }
    >;

    getQuestionInfo(
      quizEventID_: BigNumberish,
      questionID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & {
        selectionLabels: string[];
        selectionIDs: string[];
      }
    >;

    getSingleQuizEvent(
      quizEventID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string[], BigNumber[]] & {
        quizName: string;
        questions: string[];
        questionIDs: BigNumber[];
      }
    >;

    setMintRewardContract(
      mintRewardContract_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuestionInfo(
      quizEventID_: BigNumberish,
      questionID_: BigNumberish,
      selectionLabels_: string[],
      selectionIDs_: string[],
      solutionHash_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUserAnswerHashes(
      quizEventID_: BigNumberish,
      answerHashes_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _mintRewardContract(overrides?: CallOverrides): Promise<string>;

  _quizEvents(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber] & {
      quizEventID: BigNumber;
      quizName: string;
      minNumOfPasses: BigNumber;
    }
  >;

  addQuizEventAndQuestionsSkelton(
    quizName_: string,
    questions_: string[],
    minNumOfPasses_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compareStrings(
    a_: string,
    b_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getAllQuizEvents(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], string[], BigNumber[]] & {
      quizEventIDs: BigNumber[];
      quizNames: string[];
      numOfQuestions: BigNumber[];
    }
  >;

  getQuestionInfo(
    quizEventID_: BigNumberish,
    questionID_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string[], string[]] & { selectionLabels: string[]; selectionIDs: string[] }
  >;

  getSingleQuizEvent(
    quizEventID_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string[], BigNumber[]] & {
      quizName: string;
      questions: string[];
      questionIDs: BigNumber[];
    }
  >;

  setMintRewardContract(
    mintRewardContract_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuestionInfo(
    quizEventID_: BigNumberish,
    questionID_: BigNumberish,
    selectionLabels_: string[],
    selectionIDs_: string[],
    solutionHash_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUserAnswerHashes(
    quizEventID_: BigNumberish,
    answerHashes_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _mintRewardContract(overrides?: CallOverrides): Promise<string>;

    _quizEvents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        quizEventID: BigNumber;
        quizName: string;
        minNumOfPasses: BigNumber;
      }
    >;

    addQuizEventAndQuestionsSkelton(
      quizName_: string,
      questions_: string[],
      minNumOfPasses_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    compareStrings(
      a_: string,
      b_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAllQuizEvents(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[], BigNumber[]] & {
        quizEventIDs: BigNumber[];
        quizNames: string[];
        numOfQuestions: BigNumber[];
      }
    >;

    getQuestionInfo(
      quizEventID_: BigNumberish,
      questionID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & {
        selectionLabels: string[];
        selectionIDs: string[];
      }
    >;

    getSingleQuizEvent(
      quizEventID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string[], BigNumber[]] & {
        quizName: string;
        questions: string[];
        questionIDs: BigNumber[];
      }
    >;

    setMintRewardContract(
      mintRewardContract_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setQuestionInfo(
      quizEventID_: BigNumberish,
      questionID_: BigNumberish,
      selectionLabels_: string[],
      selectionIDs_: string[],
      solutionHash_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserAnswerHashes(
      quizEventID_: BigNumberish,
      answerHashes_: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogMintReward(address,uint256)"(
      userAddress_?: string | null,
      quizEventID_?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { userAddress_: string; quizEventID_: BigNumber }
    >;

    LogMintReward(
      userAddress_?: string | null,
      quizEventID_?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { userAddress_: string; quizEventID_: BigNumber }
    >;

    "LogQuizEventID(uint256)"(
      eventQuizId_?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { eventQuizId_: BigNumber }>;

    LogQuizEventID(
      eventQuizId_?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { eventQuizId_: BigNumber }>;

    "LogQuizQuestionID(uint256,uint256)"(
      questionId_?: BigNumberish | null,
      quizEventId_?: BigNumberish | null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { questionId_: BigNumber; quizEventId_: BigNumber }
    >;

    LogQuizQuestionID(
      questionId_?: BigNumberish | null,
      quizEventId_?: BigNumberish | null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { questionId_: BigNumber; quizEventId_: BigNumber }
    >;

    "LogUserAnswer(address,uint256,bool)"(
      userAddress_?: string | null,
      quizEventID_?: BigNumberish | null,
      hasPassed_?: null
    ): TypedEventFilter<
      [string, BigNumber, boolean],
      { userAddress_: string; quizEventID_: BigNumber; hasPassed_: boolean }
    >;

    LogUserAnswer(
      userAddress_?: string | null,
      quizEventID_?: BigNumberish | null,
      hasPassed_?: null
    ): TypedEventFilter<
      [string, BigNumber, boolean],
      { userAddress_: string; quizEventID_: BigNumber; hasPassed_: boolean }
    >;
  };

  estimateGas: {
    _mintRewardContract(overrides?: CallOverrides): Promise<BigNumber>;

    _quizEvents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addQuizEventAndQuestionsSkelton(
      quizName_: string,
      questions_: string[],
      minNumOfPasses_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compareStrings(
      a_: string,
      b_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllQuizEvents(overrides?: CallOverrides): Promise<BigNumber>;

    getQuestionInfo(
      quizEventID_: BigNumberish,
      questionID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSingleQuizEvent(
      quizEventID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMintRewardContract(
      mintRewardContract_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuestionInfo(
      quizEventID_: BigNumberish,
      questionID_: BigNumberish,
      selectionLabels_: string[],
      selectionIDs_: string[],
      solutionHash_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUserAnswerHashes(
      quizEventID_: BigNumberish,
      answerHashes_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _mintRewardContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _quizEvents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addQuizEventAndQuestionsSkelton(
      quizName_: string,
      questions_: string[],
      minNumOfPasses_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compareStrings(
      a_: string,
      b_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllQuizEvents(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getQuestionInfo(
      quizEventID_: BigNumberish,
      questionID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSingleQuizEvent(
      quizEventID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setMintRewardContract(
      mintRewardContract_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuestionInfo(
      quizEventID_: BigNumberish,
      questionID_: BigNumberish,
      selectionLabels_: string[],
      selectionIDs_: string[],
      solutionHash_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUserAnswerHashes(
      quizEventID_: BigNumberish,
      answerHashes_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
