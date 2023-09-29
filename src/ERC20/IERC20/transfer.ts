import { BigInt } from "@polywrap/wasm-as";
import { Ethers_Module, Ethers_TxResponse } from "../../wrap";

export function transfer(
  tokenAddress: string,
  recipient: string,
  amount: BigInt
): Ethers_TxResponse {
  if (
    tokenAddress.toLowerCase() == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  ) {
    // For Ether transfer
    return Ethers_Module.sendTransaction({
      tx: {
        to: recipient,
        value: amount,
        data: null,
        _from: null,
        _type: null,
        chainId: null,
        gasLimit: null,
        maxFeePerGas: null,
        accessList: null,
        nonce: null,
        maxPriorityFeePerGas: null,
        gasPrice: null,
      },
      connection: null,
    }).unwrap();
  }

  // For ERC20 token transfer
  const methodSignature =
    "function transfer(address,uint256) external returns (bool)";
  return Ethers_Module.callContractMethod({
    address: tokenAddress,
    method: methodSignature,
    args: [recipient, amount.toString()],
    connection: null,
    options: null,
  }).unwrap();
}
