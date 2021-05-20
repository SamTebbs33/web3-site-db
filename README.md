# web3-site-db
A web3 application that associates a URL with an ethereum address

# Test online
Head over to [the ipfs gateway](https://gateway.pinata.cloud/ipfs/QmXGbshNbev7e4Yy2263Kuz69Xtirgzs9MBoJngBNcGqJJ/) if your browser doesn't support viewing IPFS content, otherwise you can check it out [on IPFS](ipfs://QmXGbshNbev7e4Yy2263Kuz69Xtirgzs9MBoJngBNcGqJJ). Make sure you have MetaMask installed and are tracking the Ropsten test network. If you need some test ether to pay for the transaction gas fees take a look at the [faucet](https://faucet.ropsten.be) to get some for free.

# Test locally
## Blockchain
To test with a locally hosted blockchain, you'll need to install [Ganache](https://www.trufflesuite.com/ganache) and [Truffle](https://www.trufflesuite.com/truffle). Then run `truffle init` in the project's root directory and when prompted choose to not overwrite aything.

Once you've set up a Ganache workspace (run the Ganache program to do that) edit the truffle-config.js file to match the port and IP of the Ganache server you have running (localhost and port 7545 will most likely match what Ganache is serving from).

Run `truffle migrate` to deploy the smart contract(s) to the blockchain then look at the "Contracts" section of Ganache to see the address of the smart contract. Copy it and paste it into the string assigned to `contract_address` in script.js.

Click on the key icon on the right of an address in the "Accounts" section of Ganache to get the account's private key and import it into MetaMask. You can of course import as many of the accounts Ganache has set up as you'd like.

## Web server
Unfortunately MetaMask doesn't inject itself into the HTML DOM when you browse the file with the "file://" protocol so you need to start a web server. A simple one is "http-server" that you can install with `npm install http-server -g` and then run with `http-server . localhost` from the project root folder. Go to localhost:8080 in your web browser and you should see the site appear. You should be able to interact with it and transact on the blockchain you set up.
