// src/PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = ({ item }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount] = useState(item.price); // Set the amount to the item's price
    const [message, setMessage] = useState('');

    // Function to handle M-Pesa payment
    const handleMpesaPayment = async () => {
        try {
            // Send payment request to backend (adjust the URL to your backend endpoint)
            const response = await fetch('http://localhost:3000/mpesa/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber,
                    amount,
                }),
            });
            const data = await response.json();
            setMessage('M-Pesa payment initiated successfully!');
        } catch (error) {
            setMessage(`M-Pesa payment failed: ${error.message}`);
        }
    };

    // Function to handle Blockchain payment
    const handleBlockchainPayment = async () => {
        try {
            // Blockchain payment logic here (adjust to your backend or smart contract interaction)
            const response = await fetch('http://localhost:3000/blockchain/deposit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    buyerAddress: '0xYourBuyerAddress', // Replace with actual buyer's address
                    amount,
                }),
            });
            const data = await response.json();
            setMessage('Blockchain payment successful!');
        } catch (error) {
            setMessage(`Blockchain payment failed: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Purchase {item.name} for ${item.price}</h2>
            <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
            />
            <button onClick={handleMpesaPayment}>Pay with M-Pesa</button>
            <button onClick={handleBlockchainPayment}>Pay with Blockchain</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PaymentForm;
