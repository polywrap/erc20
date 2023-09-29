export class Network {
  chainName: string;
  chainId: i32;
  name: string;
  symbol: string;
  decimals: i32;
  address: string;
}

export const networks = new Map<string, Network>()
  .set("1", {
    chainName: "Ethereum Mainnet",
    chainId: 1,
    name: "ether",
    symbol: "ETH",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  })
  .set("56", {
    chainId: 56,
    chainName: "Binance Smart Chain Mainnet",
    name: "Binance Coin",
    symbol: "BNB",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  })
  .set("61", {
    chainId: 61,
    chainName: "Ethereum Classic Mainnet",
    name: "ether",
    symbol: "ETC",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  })
  .set("137", {
    chainId: 137,
    chainName: "Matic Mainnet",
    name: "Matic Token",
    symbol: "MATIC",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  })
  .set("42161", {
    chainId: 42161,
    chainName: "Arbitrum One",
    name: "ether",
    symbol: "ETH",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  })
  .set("10", {
    chainId: 10,
    chainName: "Optimistic Ethereum",
    name: "ether",
    symbol: "ETH",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  })
  .set("43114", {
    chainId: 43114,
    chainName: "Avalanche Mainnet C-Chain",
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  })
  .set("8453", {
    chainId: 8453,
    chainName: "Base",
    name: "Base",
    symbol: "BASE",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  })
  .set("100", {
    chainId: 100,
    chainName: "Gnosis Chain",
    name: "xDAI",
    symbol: "xDAI",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  })
  .set("250", {
    chainId: 250,
    chainName: "Fantom Opera",
    name: "Fantom",
    symbol: "FTM",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  });

export function getNetwork(chainId: string): Network {
  if (networks.has(chainId)) {
    return networks.get(chainId);
  }
  throw new Error(`Unknown chainId ${chainId}`);
}