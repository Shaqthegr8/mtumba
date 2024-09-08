// backend/services/mpesa.js

const axios = require('axios');

// Function to get M-Pesa access token
async function getMpesaToken() {
    const credentials = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64');
    
    try {
        const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${credentials}`,
            },
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching M-Pesa token:', error);
        throw new Error('Failed to get M-Pesa token');
    }
}

// Function to initiate M-Pesa payment
async function initiateMpesaPayment(phoneNumber, amount) {
    const token = await getMpesaToken();
    
    const requestPayload = {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: process.env.MPESA_PASSWORD,
        Timestamp: new Date().toISOString().slice(0, 14).replace(/[-:]/g, ""),
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: phoneNumber,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: 'Mtumba',
        TransactionDesc: 'Payment for Secondhand Item',
    };

    try {
        const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', requestPayload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error initiating M-Pesa payment:', error);
        throw new Error('Payment initiation failed');
    }
}

module.exports = { initiateMpesaPayment };
