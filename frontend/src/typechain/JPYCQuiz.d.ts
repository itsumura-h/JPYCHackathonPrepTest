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

interface JPYCQuizInterface extends ethers.utils.Interface {
  functions: {
    "_mintRewardContract()": FunctionFragment;
    "_quizEvent()": FunctionFragment;
    "getQuestionInfo(uint256)": FunctionFragment;
    "getQuizEvent()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerMintRewardBypassCheck()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setMinNumOfPasses(uint256)": FunctionFragment;
    "setMintRewardContract(address)": FunctionFragment;
    "setQuestionInfo(uint256,string[],string[],string)": FunctionFragment;
    "setQuestionStatement(uint256,string)": FunctionFragment;
    "setQuizEnd(bool)": FunctionFragment;
    "setQuizEventAndQuestionsSkelton(string,string[],uint256)": FunctionFragment;
    "setQuizName(string)": FunctionFragment;
    "setUserAnswerHashes(string[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_mintRewardContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_quizEvent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getQuestionInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuizEvent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerMintRewardBypassCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMinNumOfPasses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMintRewardContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setQuestionInfo",
    values: [BigNumberish, string[], string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "setQuestionStatement",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "setQuizEnd", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setQuizEventAndQuestionsSkelton",
    values: [string, string[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setQuizName", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setUserAnswerHashes",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "_mintRewardContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_quizEvent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getQuestionInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuizEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerMintRewardBypassCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinNumOfPasses",
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
    functionFragment: "setQuestionStatement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setQuizEnd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setQuizEventAndQuestionsSkelton",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setQuizName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserAnswerHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "LogMintReward(address,bool)": EventFragment;
    "LogSetQuestionInfo(uint256)": EventFragment;
    "LogUserAnswer(address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogMintReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetQuestionInfo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUserAnswer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type LogMintRewardEvent = TypedEvent<
  [string, boolean] & { userAddress_: string; isAdmin: boolean }
>;

export type LogSetQuestionInfoEvent = TypedEvent<
  [BigNumber] & { questionId_: BigNumber }
>;

export type LogUserAnswerEvent = TypedEvent<
  [string, boolean] & { userAddress_: string; hasPassed_: boolean }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class JPYCQuiz extends BaseContract {
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

  interface: JPYCQuizInterface;

  functions: {
    _mintRewardContract(overrides?: CallOverrides): Promise<[string]>;

    _quizEvent(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, boolean, BigNumber] & {
        quizName: string;
        minNumOfPasses: BigNumber;
        quizEnded: boolean;
        versionID: BigNumber;
      }
    >;

    getQuestionInfo(
      questionID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & {
        selectionLabels: string[];
        selectionIDs: string[];
      }
    >;

    getQuizEvent(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        quizName: string;
        numOfQuestions: BigNumber;
        minNumOfPasses: BigNumber;
        quizEnded: boolean;
      }
    >;

    initialize(
      mintRewardContract_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerMintRewardBypassCheck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinNumOfPasses(
      minNumOfPasses_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMintRewardContract(
      mintRewardContract_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuestionInfo(
      questionID_: BigNumberish,
      selectionLabels_: string[],
      selectionIDs_: string[],
      solutionHash_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuestionStatement(
      questionID_: BigNumberish,
      question_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuizEnd(
      quizEnded_: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuizEventAndQuestionsSkelton(
      quizName_: string,
      questions_: string[],
      minNumOfPasses_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuizName(
      quizName_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUserAnswerHashes(
      answerHashes_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _mintRewardContract(overrides?: CallOverrides): Promise<string>;

  _quizEvent(
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, boolean, BigNumber] & {
      quizName: string;
      minNumOfPasses: BigNumber;
      quizEnded: boolean;
      versionID: BigNumber;
    }
  >;

  getQuestionInfo(
    questionID_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string[], string[]] & { selectionLabels: string[]; selectionIDs: string[] }
  >;

  getQuizEvent(
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, boolean] & {
      quizName: string;
      numOfQuestions: BigNumber;
      minNumOfPasses: BigNumber;
      quizEnded: boolean;
    }
  >;

  initialize(
    mintRewardContract_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerMintRewardBypassCheck(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinNumOfPasses(
    minNumOfPasses_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMintRewardContract(
    mintRewardContract_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuestionInfo(
    questionID_: BigNumberish,
    selectionLabels_: string[],
    selectionIDs_: string[],
    solutionHash_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuestionStatement(
    questionID_: BigNumberish,
    question_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuizEnd(
    quizEnded_: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuizEventAndQuestionsSkelton(
    quizName_: string,
    questions_: string[],
    minNumOfPasses_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuizName(
    quizName_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUserAnswerHashes(
    answerHashes_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _mintRewardContract(overrides?: CallOverrides): Promise<string>;

    _quizEvent(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, boolean, BigNumber] & {
        quizName: string;
        minNumOfPasses: BigNumber;
        quizEnded: boolean;
        versionID: BigNumber;
      }
    >;

    getQuestionInfo(
      questionID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & {
        selectionLabels: string[];
        selectionIDs: string[];
      }
    >;

    getQuizEvent(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        quizName: string;
        numOfQuestions: BigNumber;
        minNumOfPasses: BigNumber;
        quizEnded: boolean;
      }
    >;

    initialize(
      mintRewardContract_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerMintRewardBypassCheck(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setMinNumOfPasses(
      minNumOfPasses_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMintRewardContract(
      mintRewardContract_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setQuestionInfo(
      questionID_: BigNumberish,
      selectionLabels_: string[],
      selectionIDs_: string[],
      solutionHash_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setQuestionStatement(
      questionID_: BigNumberish,
      question_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setQuizEnd(quizEnded_: boolean, overrides?: CallOverrides): Promise<void>;

    setQuizEventAndQuestionsSkelton(
      quizName_: string,
      questions_: string[],
      minNumOfPasses_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setQuizName(quizName_: string, overrides?: CallOverrides): Promise<void>;

    setUserAnswerHashes(
      answerHashes_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogMintReward(address,bool)"(
      userAddress_?: string | null,
      isAdmin?: null
    ): TypedEventFilter<
      [string, boolean],
      { userAddress_: string; isAdmin: boolean }
    >;

    LogMintReward(
      userAddress_?: string | null,
      isAdmin?: null
    ): TypedEventFilter<
      [string, boolean],
      { userAddress_: string; isAdmin: boolean }
    >;

    "LogSetQuestionInfo(uint256)"(
      questionId_?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { questionId_: BigNumber }>;

    LogSetQuestionInfo(
      questionId_?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { questionId_: BigNumber }>;

    "LogUserAnswer(address,bool)"(
      userAddress_?: string | null,
      hasPassed_?: null
    ): TypedEventFilter<
      [string, boolean],
      { userAddress_: string; hasPassed_: boolean }
    >;

    LogUserAnswer(
      userAddress_?: string | null,
      hasPassed_?: null
    ): TypedEventFilter<
      [string, boolean],
      { userAddress_: string; hasPassed_: boolean }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    _mintRewardContract(overrides?: CallOverrides): Promise<BigNumber>;

    _quizEvent(overrides?: CallOverrides): Promise<BigNumber>;

    getQuestionInfo(
      questionID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuizEvent(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      mintRewardContract_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerMintRewardBypassCheck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinNumOfPasses(
      minNumOfPasses_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMintRewardContract(
      mintRewardContract_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuestionInfo(
      questionID_: BigNumberish,
      selectionLabels_: string[],
      selectionIDs_: string[],
      solutionHash_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuestionStatement(
      questionID_: BigNumberish,
      question_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuizEnd(
      quizEnded_: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuizEventAndQuestionsSkelton(
      quizName_: string,
      questions_: string[],
      minNumOfPasses_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuizName(
      quizName_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUserAnswerHashes(
      answerHashes_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _mintRewardContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _quizEvent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getQuestionInfo(
      questionID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQuizEvent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      mintRewardContract_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerMintRewardBypassCheck(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinNumOfPasses(
      minNumOfPasses_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMintRewardContract(
      mintRewardContract_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuestionInfo(
      questionID_: BigNumberish,
      selectionLabels_: string[],
      selectionIDs_: string[],
      solutionHash_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuestionStatement(
      questionID_: BigNumberish,
      question_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuizEnd(
      quizEnded_: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuizEventAndQuestionsSkelton(
      quizName_: string,
      questions_: string[],
      minNumOfPasses_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuizName(
      quizName_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUserAnswerHashes(
      answerHashes_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
