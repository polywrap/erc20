import { BigInt } from "@polywrap/wasm-as";
import { Ethers_Module, Ethers_TxResponse } from "../../wrap";

export function approve(
  tokenAddress: string,
  spender: string,
  amount: BigInt
): Ethers_TxResponse {

  // If tokenAddress is for Ether, throw an error
  if (tokenAddress.toLowerCase() == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
    throw new Error("approve function is not supported for native Ether");
  }

  // For ERC20 token approve
  const methodSignature = "function approve(address,uint256) external returns (bool)";
  return Ethers_Module.callContractMethod({
    address: tokenAddress,
    method: methodSignature,
    args: [spender, amount.toString()],
    connection: null,
    options: null,
  }).unwrap();
}
