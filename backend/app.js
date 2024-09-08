// backend/app.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const { initiateMpesaPayment } = require('./services/mpesa');

app.post('/mpesa/payment', async (req, res) => {
    const { phoneNumber, amount } = req.body;

    try {
        const response = await initiateMpesaPayment(phoneNumber, amount);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: 'Payment failed', message: error.message });
    }
});

const { depositToEscrow } = require('./services/blockchain');

// Route to deposit payment into the escrow contract
app.post('/blockchain/deposit', async (req, res) => {
    const { amount, buyerAddress } = req.body;

    try {
        const tx = await depositToEscrow(amount, buyerAddress);
        res.status(200).json({ message: 'Deposit successful', transaction: tx });
    } catch (error) {
        res.status(500).json({ error: 'Deposit failed', message: error.message });
    }
});

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Mtumba Marketplace Backend is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
