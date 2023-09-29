# ERC20 Wrap

## Introduction

The ERC20 Wrap offers developers an intuitive interface to interact with any ERC20 token on the Ethereum blockchain, leveraging the Polywrap framework. By using the Wasm wrap written in Rust, developers can effortlessly interact with ERC20 tokens on any platform without dealing with the intricacies of direct smart contract interactions.

## Features

- **Token Information**: Fetch metadata like the token's name, symbol, and decimals.
- **Balance Queries**: Determine the balance of a particular address.
- **Token Transfers**: Facilitate token transfers between addresses.
- **Allowance Management**: Set and query allowances between owner and spender addresses.
- **Total Supply**: Retrieve the total supply of the ERC20 token.
- **Cross-Platform**: Thanks to Polywrap, this Wrap is compatible with virtually any platform.

## Installation

To install the ERC20 Wrap, make sure to have the `@polywrap/client-js` package:

```bash
npm install @polywrap/client-js
```

> Note: Installation steps can vary based on your environment. Refer to the [Polywrap documentation](https://docs.polywrap.io/) for comprehensive guidelines.

## Usage

To illustrate the Wrap's utility, here's an example of how you can fetch the metadata of an ERC20 token:

```javascript
import {PolywrapClient} from "@polywrap/client-js";

async function fetchTokenMeta(tokenAddress) {
  const client = new PolywrapClient();
  
  const result = await client.invoke({
    uri: "wrapscan.io/polywrap/erc20@1.0",
    method: "tokenMeta",
    args: { address: tokenAddress },
  });

  console.log(result); // Should display the token's metadata
}

const DAI_ADDRESS = "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359";
fetchTokenMeta(DAI_ADDRESS).then(() => {
  console.log("Metadata fetched!");
});
```

## ERC20 Wrap Overview

This Wrap provides essential methods to interact with ERC20 tokens:

- **tokenMeta**: Retrieve general metadata of the token.
- **totalSupply**: Determine the token's total circulating supply.
- **balanceOf**: Check the balance of an address.
- **transfer**: Transfer tokens between addresses.
- **transferFrom**: Facilitate transfers on behalf of a user (requires approval).
- **approve**: Allow another address to manage a certain amount of tokens.
- **allowance**: Check the permitted token amount an address can spend on behalf of another.

## Feedback and Contributions

For any issues, feature requests, or contributions, please raise an issue on our GitHub repository. Community involvement is encouraged, but make sure to adhere to our contribution guidelines and code of conduct.

## License

This SDK is released under the [MIT License](LICENSE). For more details, please check the LICENSE file.
