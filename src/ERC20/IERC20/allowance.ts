import { BigInt } from "@polywrap/wasm-as";
import { Ethers_Module } from "../../wrap";

export function allowance(
  tokenAddress: string,
  owner: string,
  spender: string
): BigInt {
  
  // If tokenAddress is for Ether, throw an error since allowance does not apply to Ether
  if (tokenAddress.toLowerCase() == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
    throw new Error("allowance function is not supported for native Ether");
  }

  // For ERC20 token allowance
  const methodSignature = "function allowance(address,address) external view returns (uint256)";
  const allowanceResult = Ethers_Module.callContractView({
    address: tokenAddress,
    method: methodSignature,
    args: [owner, spender], // Pass the owner and spender addresses as arguments
    connection: null,
  }).unwrap();

  return BigInt.fromString(allowanceResult);
}
