import { BigInt } from "@polywrap/wasm-as";

import { Ethers_Module } from "../../wrap";

export function totalSupply(address: string): BigInt | null {
  if (address.toLowerCase() == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
    return null;
  }
  const totalSupplyResult = Ethers_Module.callContractView({
    address: address,
    method: "function totalSupply() external view returns (uint)",
    args: [],
    connection: null,
  }).unwrap();

  return BigInt.fromString(totalSupplyResult);
}
