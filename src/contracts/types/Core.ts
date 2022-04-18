/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Core {
  export type ConditionStruct = {
    reinforcement: BigNumberish;
    fundBank: [BigNumberish, BigNumberish];
    payouts: [BigNumberish, BigNumberish];
    totalNetBets: [BigNumberish, BigNumberish];
    outcomes: [BigNumberish, BigNumberish];
    margin: BigNumberish;
    ipfsHash: BytesLike;
    outcomeWin: BigNumberish;
    state: BigNumberish;
    maxPayout: BigNumberish;
    timestamp: BigNumberish;
  };

  export type ConditionStructOutput = [
    BigNumber,
    [BigNumber, BigNumber],
    [BigNumber, BigNumber],
    [BigNumber, BigNumber],
    [BigNumber, BigNumber],
    BigNumber,
    string,
    BigNumber,
    number,
    BigNumber,
    BigNumber
  ] & {
    reinforcement: BigNumber;
    fundBank: [BigNumber, BigNumber];
    payouts: [BigNumber, BigNumber];
    totalNetBets: [BigNumber, BigNumber];
    outcomes: [BigNumber, BigNumber];
    margin: BigNumber;
    ipfsHash: string;
    outcomeWin: BigNumber;
    state: number;
    maxPayout: BigNumber;
    timestamp: BigNumber;
  };
}

export interface CoreInterface extends utils.Interface {
  contractName: "Core";
  functions: {
    "addMaintainer(address,bool)": FunctionFragment;
    "bets(uint256)": FunctionFragment;
    "calculateOdds(uint256,uint256,uint256)": FunctionFragment;
    "cancel(uint256)": FunctionFragment;
    "conditions(uint256)": FunctionFragment;
    "conditionsMargin()": FunctionFragment;
    "conditionsReinforcementFix()": FunctionFragment;
    "createCondition(uint256,uint256[2],uint256[2],uint256,bytes32)": FunctionFragment;
    "decimals()": FunctionFragment;
    "getBetInfo(uint256)": FunctionFragment;
    "getCondition(uint256)": FunctionFragment;
    "getConditionFunds(uint256)": FunctionFragment;
    "getCurrentReinforcement()": FunctionFragment;
    "getLockedPayout()": FunctionFragment;
    "initialize(uint256,address,uint256,address)": FunctionFragment;
    "isOutComeCorrect(uint256,uint256)": FunctionFragment;
    "lastBetID()": FunctionFragment;
    "lpAddress()": FunctionFragment;
    "maintainers(address)": FunctionFragment;
    "mathAddress()": FunctionFragment;
    "oracles(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "putBet(uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "renounceOracle(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resolveCondition(uint256,uint256)": FunctionFragment;
    "resolvePayout(uint256)": FunctionFragment;
    "setLP(address)": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "shift(uint256,uint256)": FunctionFragment;
    "totalLockedPayout()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "viewPayout(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addMaintainer",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "bets", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "calculateOdds",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "conditions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "conditionsMargin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "conditionsReinforcementFix",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createCondition",
    values: [
      BigNumberish,
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish],
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBetInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCondition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getConditionFunds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentReinforcement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLockedPayout",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isOutComeCorrect",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lastBetID", values?: undefined): string;
  encodeFunctionData(functionFragment: "lpAddress", values?: undefined): string;
  encodeFunctionData(functionFragment: "maintainers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mathAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "oracles", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "putBet",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resolveCondition",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "resolvePayout",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setLP", values: [string]): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "shift",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalLockedPayout",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewPayout",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addMaintainer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateOdds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "conditions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "conditionsMargin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "conditionsReinforcementFix",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCondition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBetInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCondition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConditionFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentReinforcement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLockedPayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isOutComeCorrect",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lastBetID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lpAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maintainers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mathAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracles", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "putBet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveCondition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolvePayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shift", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalLockedPayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "viewPayout", data: BytesLike): Result;

  events: {
    "ConditionCreated(uint256,uint256)": EventFragment;
    "ConditionResolved(uint256,uint256,uint256,uint256)": EventFragment;
    "ConditionShifted(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConditionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConditionResolved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConditionShifted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type ConditionCreatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { conditionID: BigNumber; timestamp: BigNumber }
>;

export type ConditionCreatedEventFilter =
  TypedEventFilter<ConditionCreatedEvent>;

export type ConditionResolvedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  {
    conditionID: BigNumber;
    outcomeWin: BigNumber;
    state: BigNumber;
    amountForLP: BigNumber;
  }
>;

export type ConditionResolvedEventFilter =
  TypedEventFilter<ConditionResolvedEvent>;

export type ConditionShiftedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { conditionID: BigNumber; newTimestamp: BigNumber }
>;

export type ConditionShiftedEventFilter =
  TypedEventFilter<ConditionShiftedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Core extends BaseContract {
  contractName: "Core";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addMaintainer(
      maintainer: string,
      active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        string
      ] & {
        conditionID: BigNumber;
        amount: BigNumber;
        odds: BigNumber;
        outcome: BigNumber;
        payed: boolean;
        createdAt: BigNumber;
        affiliate: string;
      }
    >;

    calculateOdds(
      conditionID: BigNumberish,
      amount: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { odds: BigNumber }>;

    cancel(
      conditionID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    conditions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        number,
        BigNumber,
        BigNumber
      ] & {
        reinforcement: BigNumber;
        margin: BigNumber;
        ipfsHash: string;
        outcomeWin: BigNumber;
        state: number;
        maxPayout: BigNumber;
        timestamp: BigNumber;
      }
    >;

    conditionsMargin(overrides?: CallOverrides): Promise<[BigNumber]>;

    conditionsReinforcementFix(overrides?: CallOverrides): Promise<[BigNumber]>;

    createCondition(
      oracleConditionID: BigNumberish,
      odds: [BigNumberish, BigNumberish],
      outcomes: [BigNumberish, BigNumberish],
      timestamp: BigNumberish,
      ipfsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBetInfo(
      betId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string] & {
        amount: BigNumber;
        odds: BigNumber;
        createdAt: BigNumber;
        affiliate: string;
      }
    >;

    getCondition(
      conditionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Core.ConditionStructOutput]>;

    getConditionFunds(
      conditionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber]] & { fundBank: [BigNumber, BigNumber] }>;

    getCurrentReinforcement(overrides?: CallOverrides): Promise<[BigNumber]>;

    getLockedPayout(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      reinforcement_: BigNumberish,
      oracle_: string,
      margin_: BigNumberish,
      math_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isOutComeCorrect(
      conditionID: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { correct: boolean }>;

    lastBetID(overrides?: CallOverrides): Promise<[BigNumber]>;

    lpAddress(overrides?: CallOverrides): Promise<[string]>;

    maintainers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    mathAddress(overrides?: CallOverrides): Promise<[string]>;

    oracles(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    putBet(
      conditionID: BigNumberish,
      amount: BigNumberish,
      outcomeWin: BigNumberish,
      minOdds: BigNumberish,
      affiliate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resolveCondition(
      conditionID: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resolvePayout(
      tokenID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLP(
      lpAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shift(
      conditionID: BigNumberish,
      newTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalLockedPayout(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    viewPayout(
      tokenID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; amount: BigNumber }>;
  };

  addMaintainer(
    maintainer: string,
    active: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bets(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, boolean, BigNumber, string] & {
      conditionID: BigNumber;
      amount: BigNumber;
      odds: BigNumber;
      outcome: BigNumber;
      payed: boolean;
      createdAt: BigNumber;
      affiliate: string;
    }
  >;

  calculateOdds(
    conditionID: BigNumberish,
    amount: BigNumberish,
    outcomeWin: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cancel(
    conditionID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  conditions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, BigNumber, number, BigNumber, BigNumber] & {
      reinforcement: BigNumber;
      margin: BigNumber;
      ipfsHash: string;
      outcomeWin: BigNumber;
      state: number;
      maxPayout: BigNumber;
      timestamp: BigNumber;
    }
  >;

  conditionsMargin(overrides?: CallOverrides): Promise<BigNumber>;

  conditionsReinforcementFix(overrides?: CallOverrides): Promise<BigNumber>;

  createCondition(
    oracleConditionID: BigNumberish,
    odds: [BigNumberish, BigNumberish],
    outcomes: [BigNumberish, BigNumberish],
    timestamp: BigNumberish,
    ipfsHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<BigNumber>;

  getBetInfo(
    betId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string] & {
      amount: BigNumber;
      odds: BigNumber;
      createdAt: BigNumber;
      affiliate: string;
    }
  >;

  getCondition(
    conditionID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Core.ConditionStructOutput>;

  getConditionFunds(
    conditionID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getCurrentReinforcement(overrides?: CallOverrides): Promise<BigNumber>;

  getLockedPayout(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    reinforcement_: BigNumberish,
    oracle_: string,
    margin_: BigNumberish,
    math_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isOutComeCorrect(
    conditionID: BigNumberish,
    outcomeWin: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lastBetID(overrides?: CallOverrides): Promise<BigNumber>;

  lpAddress(overrides?: CallOverrides): Promise<string>;

  maintainers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  mathAddress(overrides?: CallOverrides): Promise<string>;

  oracles(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  putBet(
    conditionID: BigNumberish,
    amount: BigNumberish,
    outcomeWin: BigNumberish,
    minOdds: BigNumberish,
    affiliate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOracle(
    oracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resolveCondition(
    conditionID: BigNumberish,
    outcomeWin: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resolvePayout(
    tokenID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLP(
    lpAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    oracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shift(
    conditionID: BigNumberish,
    newTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalLockedPayout(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  viewPayout(
    tokenID_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { success: boolean; amount: BigNumber }>;

  callStatic: {
    addMaintainer(
      maintainer: string,
      active: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    bets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        string
      ] & {
        conditionID: BigNumber;
        amount: BigNumber;
        odds: BigNumber;
        outcome: BigNumber;
        payed: boolean;
        createdAt: BigNumber;
        affiliate: string;
      }
    >;

    calculateOdds(
      conditionID: BigNumberish,
      amount: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancel(conditionID: BigNumberish, overrides?: CallOverrides): Promise<void>;

    conditions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        number,
        BigNumber,
        BigNumber
      ] & {
        reinforcement: BigNumber;
        margin: BigNumber;
        ipfsHash: string;
        outcomeWin: BigNumber;
        state: number;
        maxPayout: BigNumber;
        timestamp: BigNumber;
      }
    >;

    conditionsMargin(overrides?: CallOverrides): Promise<BigNumber>;

    conditionsReinforcementFix(overrides?: CallOverrides): Promise<BigNumber>;

    createCondition(
      oracleConditionID: BigNumberish,
      odds: [BigNumberish, BigNumberish],
      outcomes: [BigNumberish, BigNumberish],
      timestamp: BigNumberish,
      ipfsHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    getBetInfo(
      betId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string] & {
        amount: BigNumber;
        odds: BigNumber;
        createdAt: BigNumber;
        affiliate: string;
      }
    >;

    getCondition(
      conditionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Core.ConditionStructOutput>;

    getConditionFunds(
      conditionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getCurrentReinforcement(overrides?: CallOverrides): Promise<BigNumber>;

    getLockedPayout(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      reinforcement_: BigNumberish,
      oracle_: string,
      margin_: BigNumberish,
      math_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isOutComeCorrect(
      conditionID: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lastBetID(overrides?: CallOverrides): Promise<BigNumber>;

    lpAddress(overrides?: CallOverrides): Promise<string>;

    maintainers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    mathAddress(overrides?: CallOverrides): Promise<string>;

    oracles(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    putBet(
      conditionID: BigNumberish,
      amount: BigNumberish,
      outcomeWin: BigNumberish,
      minOdds: BigNumberish,
      affiliate: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    renounceOracle(oracle_: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resolveCondition(
      conditionID: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    resolvePayout(
      tokenID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; amount: BigNumber }>;

    setLP(lpAddress_: string, overrides?: CallOverrides): Promise<void>;

    setOracle(oracle_: string, overrides?: CallOverrides): Promise<void>;

    shift(
      conditionID: BigNumberish,
      newTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalLockedPayout(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    viewPayout(
      tokenID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; amount: BigNumber }>;
  };

  filters: {
    "ConditionCreated(uint256,uint256)"(
      conditionID?: null,
      timestamp?: null
    ): ConditionCreatedEventFilter;
    ConditionCreated(
      conditionID?: null,
      timestamp?: null
    ): ConditionCreatedEventFilter;

    "ConditionResolved(uint256,uint256,uint256,uint256)"(
      conditionID?: null,
      outcomeWin?: null,
      state?: null,
      amountForLP?: null
    ): ConditionResolvedEventFilter;
    ConditionResolved(
      conditionID?: null,
      outcomeWin?: null,
      state?: null,
      amountForLP?: null
    ): ConditionResolvedEventFilter;

    "ConditionShifted(uint256,uint256)"(
      conditionID?: null,
      newTimestamp?: null
    ): ConditionShiftedEventFilter;
    ConditionShifted(
      conditionID?: null,
      newTimestamp?: null
    ): ConditionShiftedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addMaintainer(
      maintainer: string,
      active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bets(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    calculateOdds(
      conditionID: BigNumberish,
      amount: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancel(
      conditionID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    conditions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    conditionsMargin(overrides?: CallOverrides): Promise<BigNumber>;

    conditionsReinforcementFix(overrides?: CallOverrides): Promise<BigNumber>;

    createCondition(
      oracleConditionID: BigNumberish,
      odds: [BigNumberish, BigNumberish],
      outcomes: [BigNumberish, BigNumberish],
      timestamp: BigNumberish,
      ipfsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    getBetInfo(
      betId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCondition(
      conditionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getConditionFunds(
      conditionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentReinforcement(overrides?: CallOverrides): Promise<BigNumber>;

    getLockedPayout(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      reinforcement_: BigNumberish,
      oracle_: string,
      margin_: BigNumberish,
      math_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isOutComeCorrect(
      conditionID: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastBetID(overrides?: CallOverrides): Promise<BigNumber>;

    lpAddress(overrides?: CallOverrides): Promise<BigNumber>;

    maintainers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    mathAddress(overrides?: CallOverrides): Promise<BigNumber>;

    oracles(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    putBet(
      conditionID: BigNumberish,
      amount: BigNumberish,
      outcomeWin: BigNumberish,
      minOdds: BigNumberish,
      affiliate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resolveCondition(
      conditionID: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resolvePayout(
      tokenID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLP(
      lpAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shift(
      conditionID: BigNumberish,
      newTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalLockedPayout(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    viewPayout(
      tokenID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMaintainer(
      maintainer: string,
      active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateOdds(
      conditionID: BigNumberish,
      amount: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancel(
      conditionID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    conditions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    conditionsMargin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    conditionsReinforcementFix(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createCondition(
      oracleConditionID: BigNumberish,
      odds: [BigNumberish, BigNumberish],
      outcomes: [BigNumberish, BigNumberish],
      timestamp: BigNumberish,
      ipfsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBetInfo(
      betId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCondition(
      conditionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getConditionFunds(
      conditionID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentReinforcement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLockedPayout(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      reinforcement_: BigNumberish,
      oracle_: string,
      margin_: BigNumberish,
      math_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isOutComeCorrect(
      conditionID: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastBetID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lpAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maintainers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mathAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracles(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    putBet(
      conditionID: BigNumberish,
      amount: BigNumberish,
      outcomeWin: BigNumberish,
      minOdds: BigNumberish,
      affiliate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resolveCondition(
      conditionID: BigNumberish,
      outcomeWin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resolvePayout(
      tokenID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLP(
      lpAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shift(
      conditionID: BigNumberish,
      newTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalLockedPayout(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    viewPayout(
      tokenID_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}