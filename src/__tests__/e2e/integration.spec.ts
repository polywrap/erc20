import { ERC20 } from "../types";
jest.setTimeout(300000);

describe("ERC20", () => {
  let erc20: ERC20;
  let wrapperUri: string;

  beforeAll(async () => {
    // deploy wrapper
    
    wrapperUri = `fs/${__dirname}/../../../build`;
    // get client
    erc20 = new ERC20(undefined, undefined, wrapperUri);
  });

  describe("Meta", () => {
    test("USDC", async () => {
      const result = await erc20.tokenMeta({
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      });
      expect(result.ok).toBeTruthy();
      if (!result.ok) throw new Error("Response is not ok");
      expect(result.value).toBeTruthy();
      expect(result.value).toMatchObject({
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48".toLowerCase(),
        decimals: 6,
        name: "USD Coin",
        symbol: "USDC",
      });
    });

    test("DAI", async () => {
      const result = await erc20.tokenMeta({
        address: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
      });
      expect(result.ok).toBeTruthy();
      if (!result.ok) throw new Error("Response is not ok");
      expect(result.value).toBeTruthy();
      expect(result.value).toMatchObject({
        address: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359".toLowerCase(),
        name: "Dai Stablecoin v1.0",
        symbol: "DAI",
        decimals: 18,
      });
    });

    test("ETH", async () => {
      const result = await erc20.tokenMeta({
        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      });
      expect(result.ok).toBeTruthy();
      if (!result.ok) throw new Error("Response is not ok");
      expect(result.value).toBeTruthy();
      expect(result.value).toMatchObject({
        address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        name: "ether",
        symbol: "ETH",
        decimals: 18,
      });
    });

    test("xSUSHI", async () => {
      const result = await erc20.tokenMeta({
        address: "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
      });
      expect(result.ok).toBeTruthy();
      if (!result.ok) throw new Error("Response is not ok");
      expect(result.value).toBeTruthy();
      expect(result.value).toMatchObject({
        address: "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272".toLowerCase(),
        name: "SushiBar",
        symbol: "xSUSHI",
        decimals: 18,
      });
    });

    test("SAND", async () => {
      const result = await erc20.tokenMeta({
        address: "0x3845badade8e6dff049820680d1f14bd3903a5d0",
      });
      expect(result.ok).toBeTruthy();
      if (!result.ok) throw new Error("Response is not ok");
      expect(result.value).toBeTruthy();
      expect(result.value).toMatchObject({
        address: "0x3845badade8e6dff049820680d1f14bd3903a5d0".toLowerCase(),
        name: "SAND",
        symbol: "SAND",
        decimals: 18,
      });
    });
  });

  describe("totalSupply", () => {
    test("FWB", async () => {
      const result = await erc20.totalSupply({
        address: "0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8",
      });
      expect(result.ok).toBeTruthy();
      if (!result.ok) throw new Error("Response is not ok");
      expect(result.value).toBe("1000000000000000000000000")
    });
  });

  describe("balanceOf", () => {
    test("WRAP-IOU", async () => {
      const result = await erc20.balanceOf({
        address: "0xECCac17265D5b6daEBafb9c94430f3E1Cc41431d",
        owner: "0x133D93566f9699B3Af46fE150daA8a67a9563ED6",
      });
      expect(result.ok).toBeTruthy();
      if (!result.ok) throw new Error("Response is not ok");
      expect(result.value).toBe("160000000000000000000")
    })
  });
});
