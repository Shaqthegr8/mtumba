// src/BuyerPortal.js
import React, { useState, useEffect } from 'react';
import PaymentForm from './PaymentForm'; // Import the payment form component

const BuyerPortal = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null); // Track the selected item for purchase

    useEffect(() => {
        // Fetch listed items from backend or use mock data for now
        const mockItems = [
            { id: 1, name: 'Used Laptop', price: 500, description: 'A secondhand laptop in great condition' },
            { id: 2, name: 'Old Phone', price: 150, description: 'A used phone in good condition' }
        ];
        setItems(mockItems); // Update state with items
    }, []);

    const handlePurchase = (item) => {
        // Set the selected item to trigger the PaymentForm
        setSelectedItem(item);
    };

    return (
        <>
            <h2>Buyer Portal - Browse Items</h2>
            <div className="items-list">
                {items.map((item) => (
                    <div key={item.id} className="item">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => handlePurchase(item)}>Buy Now</button>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <PaymentForm item={selectedItem} /> 
            )}
        </>
    );
};

export default BuyerPortal;
