# Blockchain-Capstone
Decentralized Real Estate ERC721 Tokens with Zokrates for zkSNARKs on Ethereum.

# Prerequisites

- [Ganache] - ONE CLICK BLOCKCHAIN.
- [Truffle] - SWEET TOOLS FOR SMART CONTRACTS.
- [OpenZeppelin] - OpenZeppelin is a library for secure smart contract development
- [Zokrates] - A toolbox for zkSNARKs on Ethereum
- [MetaMask] - Allows you to run Ethereum dApps right in your browser
- [MEW] - To mint tokens directly from your wallet.

# Project Setup
- Clone or download project and use ``cd`` command in terminal to navigate to project folder.
- Run command in terminal ``npm install`` to install all dependencies required for this project.

# Testing Project
- Run Ganache Blockchain
Run command in the project folder ``cd eth-contracts``.

- TestERC721Mintable
Run command in terminal ``truffle migrate --reset`` then ``truffle test ./test/TestERC721Mintable.js``

- TestSolnSquareVerifier
Run command in terminal ``truffle test ./test/TestSolnSquareVerifier.js``

- TestSquareVerifier
Run command in terminal ``truffle test ./test/TestSquareVerifier.js``

# Contract Deployed to Rinkeby Testnet

| Contract             | Address on Rinkeby test network                                    | 
|----------------------|--------------------------------------------------------------------|
| Verifier             | 0x0600B30dC5dCdB58CD8C47976c5b19409eDD88BA                         |
| SolnSquareVerifier   | 0x04a382CF4b9EA08610413b2bA608ed11312DafBc                         |

# Opensea Marketplace for Ethereum Tokens:

- Assets for Sale: https://rinkeby.opensea.io/assets/craveu

![Token Assets](https://github.com/sagaratalatti/Blockchain-Capstone/blob/master/images/OS-sell.png)

- Assets Purchased from another address:

![Tokens Purchased](https://github.com/sagaratalatti/Blockchain-Capstone/blob/master/images/OS-bg.png)

[Ganache]: <https://truffleframework.com/ganache>
[Truffle]: <https://truffleframework.com/>
[OpenZeppelin]: <https://github.com/OpenZeppelin/openzeppelin-solidity>
[Zokrates]: <https://github.com/Zokrates/ZoKrates>
[MetaMask]: <https://metamask.io/>
[MEW]: <https://www.myetherwallet.com/access-my-wallet>

