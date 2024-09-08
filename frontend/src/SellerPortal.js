import React, { useState } from 'react';

const SellerPortal = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image', image);

        // Send to backend or store in state for now (mockup purpose)
        setMessage('Item listed successfully!');
        setName('');
        setPrice('');
        setDescription('');
        setImage(null);
    };

    return (
        <div>
            <h2>Seller Portal - List Your Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
                <button type="submit">List Item</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SellerPortal;
