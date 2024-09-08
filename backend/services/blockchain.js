// backend/services/blockchain.js
const { ethers } = require('ethers');
const contractABI = require('./MtumbaEscrow.json'); // Your compiled contract ABI
const contractAddress = '0xYourDeployedContractAddress'; // Replace with the deployed contract address

// Function to interact with the smart contract
async function depositToEscrow(amount, buyerAddress) {
    try {
        const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com'); // Replace with your provider (e.g., Polygon Mumbai)
        const signer = provider.getSigner(buyerAddress); // The buyer will sign the transaction

        // Create a new contract instance
        const escrowContract = new ethers.Contract(contractAddress, contractABI, signer);

        // Call the deposit function of the escrow contract
        const tx = await escrowContract.deposit({ value: ethers.utils.parseEther(amount) });
        await tx.wait(); // Wait for the transaction to be mined
        return tx;
    } catch (error) {
        console.error('Error interacting with the smart contract:', error);
        throw new Error('Failed to deposit to escrow');
    }
}

module.exports = { depositToEscrow };
