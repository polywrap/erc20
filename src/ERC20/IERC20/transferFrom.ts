import { BigInt } from "@polywrap/wasm-as";
import { Ethers_Module, Ethers_TxResponse } from "../../wrap";

export function transferFrom(
  tokenAddress: string,
  from: string,
  recipient: string,
  amount: BigInt
): Ethers_TxResponse {

  // If tokenAddress is for Ether, return an error response
  if (tokenAddress.toLowerCase() == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
    throw new Error("transferFrom is not supported for native Ether");
  }

  // For ERC20 token transferFrom
  const methodSignature = "function transferFrom(address,address,uint256) external returns (bool)";
  return Ethers_Module.callContractMethod({
    address: tokenAddress,
    method: methodSignature,
    args: [from, recipient, amount.toString()],
    connection: null,
    options: null,
  }).unwrap();
}
