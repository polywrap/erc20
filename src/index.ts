import { Args_allowance, Args_approve, Args_balanceOf, Args_tokenMeta, Args_totalSupply, Args_transfer, Args_transferFrom, Ethers_TxResponse, ModuleBase, TokenMeta } from "./wrap";
import * as ERC20 from "./ERC20";
import { BigInt } from "@polywrap/wasm-as";

export class Module extends ModuleBase {
  tokenMeta(args: Args_tokenMeta): TokenMeta {
    return {
      address: args.address.toLowerCase(),
      name: ERC20.name(args.address),
      symbol: ERC20.symbol(args.address),
      decimals: ERC20.decimals(args.address),
    };
  }

  totalSupply(args: Args_totalSupply): BigInt | null {
    return ERC20.totalSupply(args.address);
  }

  balanceOf(args: Args_balanceOf): BigInt {
    return ERC20.balanceOf(args.address, args.owner);
  }

  transfer(args: Args_transfer): Ethers_TxResponse {
    return ERC20.transfer(args.address, args.to, args.value);
  }

  transferFrom(args: Args_transferFrom): Ethers_TxResponse {
    return ERC20.transferFrom(args.address, args._from, args.to, args.value);
  }

  approve(args: Args_approve): Ethers_TxResponse {
    return ERC20.approve(args.address, args.spender, args.value);
  }

  allowance(args: Args_allowance): BigInt {
    return ERC20.allowance(args.address, args.owner, args.spender);
  }
}
