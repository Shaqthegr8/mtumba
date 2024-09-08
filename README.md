# **Mtumba - A Secure Secondhand Marketplace**

## **Project Overview**
**Mtumba** is an innovative e-commerce platform designed to solve the challenges of trust, security, and fragmented payments in traditional secondhand marketplaces. By leveraging **blockchain technology**, **M-Pesa mobile payments**, and **Privado ID** for identity verification, the platform ensures a seamless, secure, and user-friendly environment for buying and selling secondhand goods.

In many secondhand marketplaces, both buyers and sellers face risks of fraud, non-delivery of goods, and limited access to reliable payment methods. **Mtumba** provides a secure solution through blockchain-based escrow contracts, ensuring transparency and trust in every transaction. M-Pesa integration ensures accessibility for users in regions where traditional banking is limited, while Privado ID enhances security through decentralized identity verification.

---

## **Key Features**
- **Blockchain Escrow Contracts**: Payments are held in secure escrow until both the buyer and seller confirm the transaction.
- **M-Pesa Integration**: Allows mobile payments for users without access to traditional banking services, making the platform accessible for a wider audience.
- **Privado ID for Identity Verification**: Uses decentralized identity technology to verify users, reducing fraud and ensuring privacy.
- **Seller Portal**: Sellers can easily list secondhand items for sale, including images, descriptions, and pricing.
- **Buyer Portal**: Buyers can browse items, view detailed descriptions, and initiate secure payments via M-Pesa or blockchain.
- **Mobile-First Design**: The platform is optimized for mobile users, ensuring a seamless experience across devices.

---

## **Problem Solved**
The **Mtumba** platform addresses the following key issues in traditional secondhand marketplaces:

1. **Lack of Trust**: Buyers and sellers often lack confidence in the transaction process, with concerns over fraud or non-delivery. Mtumba solves this by utilizing blockchain escrow, ensuring that funds are only released when both parties confirm the transaction.
2. **Limited Payment Options**: In many regions, users don't have access to traditional banking systems. Mtumba integrates **M-Pesa**, enabling users to participate in the marketplace using their mobile phones.
3. **Security and Privacy**: Fraudulent activities and identity theft are common issues in online marketplaces. Mtumba uses **Privado ID** for decentralized identity verification, protecting users' privacy and ensuring secure transactions.

---

## **Technologies Used**
- **Frontend**: React.js for building a responsive and dynamic user interface.
- **Backend**: Node.js with Express.js for handling API requests and managing the marketplace logic.
- **Blockchain**: Ethereum (or Celo/Polygon) smart contracts for escrow payments, utilizing Solidity for contract development.
- **Payments**: M-Pesa API for mobile payments, integrated via Axios.
- **Identity Verification**: Privado ID for secure and decentralized identity verification.
- **Database**: Optional (MongoDB, PostgreSQL, etc.) for storing user data, listed items, and transactions (if implemented).

---

## **How It Works**
1. **Seller Lists Item**: Sellers can log in and post items for sale through the Seller Portal, providing details such as the item's name, price, description, and images.
2. **Buyer Browses Items**: Buyers can browse through available secondhand items in the Buyer Portal, view detailed descriptions, and initiate a purchase by clicking "Buy Now."
3. **Identity Verification (Privado ID)**: Buyers are verified using Privado ID, ensuring the marketplace is safe from fraud.
4. **Payments via M-Pesa or Blockchain**: Buyers can choose to pay using M-Pesa or through blockchain escrow payments. M-Pesa is integrated to allow seamless mobile payments, especially for users in regions with limited banking access.
5. **Escrow Contract**: If the buyer chooses blockchain payment, the funds are held in a secure escrow contract. The funds are released to the seller only when the buyer confirms that they have received the item.
6. **Transaction Completion**: Once both parties confirm the transaction, the escrow releases the payment to the seller, ensuring a secure and transparent transaction process.

---

## **Installation and Setup**

### **Prerequisites**
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MetaMask** (for blockchain transactions)
- **M-Pesa API credentials** (for integrating mobile payments)
- **Privado ID API credentials** (for identity verification)

### **Clone the Repository**
```bash
git clone https://github.com/your-username/mtumba-marketplace.git
cd mtumba-marketplace
```

### **Backend Setup**
1. Navigate to the `backend/` folder.
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory and add your **M-Pesa** and **Privado ID** API credentials:
   ```plaintext
   MPESA_CONSUMER_KEY=your_consumer_key
   MPESA_CONSUMER_SECRET=your_consumer_secret
   MPESA_SHORTCODE=your_shortcode
   MPESA_PASSWORD=your_password
   MPESA_CALLBACK_URL=https://your-callback-url.com
   PRIVADO_API_KEY=your_privado_api_key
   ```

4. Start the backend server:
   ```bash
   node app.js
   ```

### **Frontend Setup**
1. Navigate to the `frontend/` folder.
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

---

## **Smart Contract Deployment**

If you want to deploy the smart contract:

1. Compile and deploy the **MtumbaEscrow** contract using **Remix IDE** or **Hardhat**.
2. After deployment, add the deployed contract address in your `PaymentForm.js` or backend logic.

---

## **Usage**

1. **List Items**: Sellers can list items for sale via the Seller Portal.
2. **Browse and Buy**: Buyers browse items and initiate payments via M-Pesa or Blockchain (escrow).
3. **Identity Verification**: Buyers are verified via Privado ID, ensuring security and transparency.
4. **Complete Transaction**: Once the buyer confirms receipt, the payment is released to the seller.

---

## **Contributing**

We welcome contributions to improve the platform! If you'd like to contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any questions or issues, feel free to open an issue or reach out at [your-email@example.com].

---

This README should cover all aspects of your project, making it easy for others to understand its purpose, how to use it, and how to contribute. Let me know if you'd like to tweak anything further!
