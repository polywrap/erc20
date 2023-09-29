import { BigInt } from "@polywrap/wasm-as";

import { Ethers_Module } from "../../wrap";

export function balanceOf(address: string, owner: string): BigInt {
  if (address.toLowerCase() == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
    return Ethers_Module.getBalance(
      { address: owner, blockTag: null, connection: null },
    ).unwrap();
  }

  const balanceOfResult = Ethers_Module.callContractView({
    address: address,
    method: "function balanceOf(address) external view returns (uint)",
    args: [owner], // Pass the owner's address as an argument
    connection: null,
  }).unwrap();

  return BigInt.fromString(balanceOfResult);
}
