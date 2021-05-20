var loaded = false;
const contract_abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			}
		],
		"name": "setWebsite",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getWebsite",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contract_address = "0x354E516a37e12D962cd4FDC5C12ad4bf5B5b3EE6";
var website_text = document.getElementById("website");
var address_text = document.getElementById("address");

async function loadWeb3() {
    if (window.ethereum) {
	await window.ethereum.send("eth_requestAccounts");
	window.web3 = new Web3(window.ethereum);
	return true;
    } else {
	return false;
    }
}

async function load() {
    loaded = await loadWeb3();
    window.contract = await loadContract();
    updateStatus(loaded ? "Ready" : "Please install the metamask extension");
}

async function loadContract() {
    return await new window.web3.eth.Contract(contract_abi, contract_address);
}

function updateStatus(status) {
    const statusEl = document.getElementById('status');
    statusEl.innerHTML = status;
    console.log(status);
}

async function getAccount() {
    console.log("Getting account");
    if (address.value === "") {
	const accounts = await window.web3.eth.getAccounts();
	return accounts[0];
    } else {
	return address.value;
    }
}

async function getWebsite() {
    console.log("Getting website");
    const account = await getAccount();
    const site = JSON.stringify(await window.contract.methods.getWebsite(account).call());
    return site.substring(1, site.length - 1);
}

async function uiGoToWebsite() {
    var site = await getWebsite();
    window.open(site);
}

async function uiGetWebsite() {
    var site = await getWebsite();
    website_text.value = site;
}

async function uiSetWebsite() {
    const account = await getAccount();
    console.log("Setting website for account " + account + " to " + website_text.value);
    await window.contract.methods.setWebsite(website_text.value).send({from: account});
}

load();
