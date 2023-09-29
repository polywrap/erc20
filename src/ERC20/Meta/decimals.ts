import { Ethers_Module } from "../../wrap";
import { getNetwork } from "../networks";

export function decimals(address: string): i32 {
  if (address.toLowerCase() == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
    const chainId = Ethers_Module.getChainId({ connection: null }).unwrap();
    const network = getNetwork(chainId);
    return network.decimals;
  }
  const decimalsResult = Ethers_Module.callContractView({
    address: address,
    method: "function decimals() external view returns (uint8)",
    args: [],
    connection: null,
  }).unwrap();

  return I32.parseInt(decimalsResult);
}
