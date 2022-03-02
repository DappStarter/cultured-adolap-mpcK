require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain clutch hunt glide foster gaze'; 
let testAccounts = [
"0x85e1129aedf8f22aa19d96b50fc15408cb3f0396f2fd8086775b7c15d67fd4da",
"0x72cefb293b8c87dfa47c9564985de8da722f9bf2d32559dfc47a5fdbc2707151",
"0x168a57c47d2ccb79179da0de9cdb8206ea8cdad49a285fca4c3ee75c18096f4b",
"0x3d6d2a9652665c04a2adade67c062a1cd564b35bb9c86138b257e075f8829644",
"0x2eff1273b7b6274c3b0a2b2f193d449105559e981912b2e31bf1997effad1503",
"0x887f2f4396c6cbed1aebce0b298d939741a05399db461191b8b10b94da2b0a4b",
"0xe184fb1483a8429af3f011b7c7672e74f815458994c9f0be16b5b413fb1ee25a",
"0x04f45edb72c833115ba1e71805e3ad5734b73c10162feecba55a87ae7783df6d",
"0x792af9d9f5cfab70f98df904b15d5fcfd5560b1af602d1a9c4ad4608b593a766",
"0xbd445f7fe773e0e5a46a0d3e710093447d5bf16843d62cc30a01847c88a8db3d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

