/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  QuizRewardNFTTemplate,
  QuizRewardNFTTemplateInterface,
} from "../QuizRewardNFTTemplate";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenURIJson",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "qrCode",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_qrCode",
        type: "string",
      },
    ],
    name: "setQrCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506111e5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806305aaddbf14610046578063c0084f9914610062578063e820e91b14610080575b600080fd5b610060600480360381019061005b9190610695565b6100b0565b005b61006a6100ca565b604051610077919061093a565b60405180910390f35b61009a600480360381019061009591906106d6565b610158565b6040516100a7919061093a565b60405180910390f35b80600090805190602001906100c6929190610575565b5050565b600080546100d790610b3a565b80601f016020809104026020016040519081016040528092919081815260200182805461010390610b3a565b80156101505780601f1061012557610100808354040283529160200191610150565b820191906000526020600020905b81548152906001019060200180831161013357829003601f168201915b505050505081565b60606000610165836101ce565b9050600061017284610208565b61017b836103b5565b60405160200161018c929190610883565b60405160208183030381529060405290506101a6816103b5565b6040516020016101b691906108c8565b60405160208183030381529060405292505050919050565b60606101d982610208565b6101e1610554565b6040516020016101f29291906108ea565b6040516020818303038152906040529050919050565b60606000821415610250576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506103b0565b600082905060005b6000821461028257808061026b90610b9d565b915050600a8261027b9190610a2f565b9150610258565b60008167ffffffffffffffff8111156102c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156102f65781602001600182028036833780820191505090505b5090505b600085146103a95760018261030f9190610aba565b9150600a8561031e9190610be6565b603061032a91906109d9565b60f81b818381518110610366577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856103a29190610a2f565b94506102fa565b8093505050505b919050565b60606000825114156103d85760405180602001604052806000815250905061054f565b6000604051806060016040528060408152602001611170604091399050600060036002855161040791906109d9565b6104119190610a2f565b600461041d9190610a60565b9050600060208261042e91906109d9565b67ffffffffffffffff81111561046d577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561049f5781602001600182028036833780820191505090505b509050818152600183018586518101602084015b8183101561050e576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f81168501518253600182019150506104b3565b600389510660018114610528576002811461053857610543565b613d3d60f01b6002830352610543565b603d60f81b60018303525b50505050508093505050505b919050565b606060405180610120016040528060f0815260200161108060f09139905090565b82805461058190610b3a565b90600052602060002090601f0160209004810192826105a357600085556105ea565b82601f106105bc57805160ff19168380011785556105ea565b828001600101855582156105ea579182015b828111156105e95782518255916020019190600101906105ce565b5b5090506105f791906105fb565b5090565b5b808211156106145760008160009055506001016105fc565b5090565b600061062b61062684610981565b61095c565b90508281526020810184848401111561064357600080fd5b61064e848285610af8565b509392505050565b600082601f83011261066757600080fd5b8135610677848260208601610618565b91505092915050565b60008135905061068f81611068565b92915050565b6000602082840312156106a757600080fd5b600082013567ffffffffffffffff8111156106c157600080fd5b6106cd84828501610656565b91505092915050565b6000602082840312156106e857600080fd5b60006106f684828501610680565b91505092915050565b600061070a826109b2565b61071481856109bd565b9350610724818560208601610b07565b61072d81610cd3565b840191505092915050565b6000610743826109b2565b61074d81856109ce565b935061075d818560208601610b07565b80840191505092915050565b60006107766002836109ce565b915061078182610ce4565b600282019050919050565b60006107996007836109ce565b91506107a482610d0d565b600782019050919050565b60006107bc605f836109ce565b91506107c782610d36565b605f82019050919050565b60006107df6014836109ce565b91506107ea82610dab565b601482019050919050565b6000610802601d836109ce565b915061080d82610dd4565b601d82019050919050565b60006108256094836109ce565b915061083082610dfd565b609482019050919050565b60006108486006836109ce565b915061085382610ebe565b600682019050919050565b600061086c610129836109ce565b915061087782610ee7565b61012982019050919050565b600061088e826107d2565b915061089a8285610738565b91506108a5826107af565b91506108b18284610738565b91506108bc82610769565b91508190509392505050565b60006108d3826107f5565b91506108df8284610738565b915081905092915050565b60006108f58261085e565b91506109018285610738565b915061090c8261078c565b915061091782610818565b91506109238284610738565b915061092e8261083b565b91508190509392505050565b6000602082019050818103600083015261095481846106ff565b905092915050565b6000610966610977565b90506109728282610b6c565b919050565b6000604051905090565b600067ffffffffffffffff82111561099c5761099b610ca4565b5b6109a582610cd3565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006109e482610aee565b91506109ef83610aee565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a2457610a23610c17565b5b828201905092915050565b6000610a3a82610aee565b9150610a4583610aee565b925082610a5557610a54610c46565b5b828204905092915050565b6000610a6b82610aee565b9150610a7683610aee565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610aaf57610aae610c17565b5b828202905092915050565b6000610ac582610aee565b9150610ad083610aee565b925082821015610ae357610ae2610c17565b5b828203905092915050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b25578082015181840152602081019050610b0a565b83811115610b34576000848401525b50505050565b60006002820490506001821680610b5257607f821691505b60208210811415610b6657610b65610c75565b5b50919050565b610b7582610cd3565b810181811067ffffffffffffffff82111715610b9457610b93610ca4565b5b80604052505050565b6000610ba882610aee565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610bdb57610bda610c17565b5b600182019050919050565b6000610bf182610aee565b9150610bfc83610aee565b925082610c0c57610c0b610c46565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f227d000000000000000000000000000000000000000000000000000000000000600082015250565b7f3c2f746578743e00000000000000000000000000000000000000000000000000600082015250565b7f222c20226465736372697074696f6e223a202248656c6c6f4e4654206973206160008201527f2066756c6c206f6e2d636861696e2074657874204e46542e222c2022696d616760208201527f65223a2022646174613a696d6167652f7376672b786d6c3b6261736536342c00604082015250565b7f7b226e616d65223a202248656c6c6f4e46542023000000000000000000000000600082015250565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000600082015250565b7f3c73766720783d223130302220793d22313030222077696474683d223830222060008201527f6865696768743d223830222076696577426f783d22302030203130302031303060208201527f223e3c636972636c652063783d223530222063793d2235302220723d2234352260408201527f207374726f6b652d77696474683d22313022207374726f6b653d22626c75652260608201527f2066696c6c3d2261717561222f3e3c2f7376673e000000000000000000000000608082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d22302030203230302032303060408201527f223e3c7374796c653e746578747b66696c6c3a626c61636b3b333070783b666f60608201527f6e742d66616d696c793a73657269663b7d3c2f7374796c653e3c72656374207760808201527f696474683d223130302522206865696768743d2231303025222066696c6c3d2260a08201527f2363636464636322202f3e3c7465787420783d223130252220793d223330252260c08201527f20666f6e742d73697a653d2235307078223e48656c6c6f4e46543c2f7465787460e08201527f3e3c7465787420783d223130252220793d223630252220666f6e742d73697a656101008201527f3d2233307078223e23000000000000000000000000000000000000000000000061012082015250565b61107181610aee565b811461107c57600080fd5b5056fe3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323030302f737667222077696474683d2231323822206865696768743d22313238223e3c7374796c653e746578747b66696c6c3a626c61636b3b333070783b666f6e742d66616d696c793a73657269663b7d3c2f7374796c653e3c6120687265663d2268747470733a2f2f747769747465722e636f6d2f6a70795f636f696e22207461726765743d225f626c616e6b223e3c7465787420783d2231302220793d223130223e466f6c6c6f77204a5059432074776974746572206163636f756e74213c2f746578743e3c2f613e3c2f7376673e4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa264697066735822122005252282721c886299d1b33086160e38816ec225dadad95a76254391f63068c464736f6c63430008040033";

export class QuizRewardNFTTemplate__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<QuizRewardNFTTemplate> {
    return super.deploy(overrides || {}) as Promise<QuizRewardNFTTemplate>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): QuizRewardNFTTemplate {
    return super.attach(address) as QuizRewardNFTTemplate;
  }
  connect(signer: Signer): QuizRewardNFTTemplate__factory {
    return super.connect(signer) as QuizRewardNFTTemplate__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuizRewardNFTTemplateInterface {
    return new utils.Interface(_abi) as QuizRewardNFTTemplateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QuizRewardNFTTemplate {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as QuizRewardNFTTemplate;
  }
}
