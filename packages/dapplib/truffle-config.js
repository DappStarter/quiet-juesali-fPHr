require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stove deny noise history hockey end army gasp'; 
let testAccounts = [
"0xbcbfdd48fdf9a153a117da87c515dd4142b447fd23ca1568f90aa67253bb5609",
"0x0d2acbf6d220a29eb6b00b9fa9ebb61b59490004d07f8ab72e91f51724d109db",
"0x26e2c4caf7a46fc7cc1c3937fa6e7e629da87419ceb8a46c48428f35a3fffbe9",
"0x5fb55db16f7ce14f111bfa2ae21435311afe9d9f84a2bd201435170d2340e287",
"0x530c1d92b8da10eecc22984fec8372bbebb38e8f3a3af6d2714a12194b6634c5",
"0x84a46b7df1af36c52e01715d59fc6d034b02d3a9e5c9a2acb7887e183bd12f62",
"0x239d77c2432faef990f9216b68b2091dd4484edba2a5a42ce8fd24eb97237069",
"0x9ea71edaad4990e1a16a737f07cb0793e6630ab41e7234676143976d4daaf3fb",
"0x5c28b251ea5a5cbb4069f6fbe1ea2e4f4af99f4326d72bb7d96f422f6ce5a9db",
"0x7404040f15d1938bff72f999ea9108ef09bb7b4d5ddd225a35377e8d5ef02e34"
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

