require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Food = require('./models/Food');
const Order = require('./models/Order');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Database Connected Successfully'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// 1. Get all foods
app.get('/api/foods', async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

// 2. Seed default data
app.post('/api/foods/seed', async (req, res) => {
    try {
        const sampleFoods = [
            {
                name: "Classic Smash Burger",
                category: "Burgers",
                price: 850,
                rating: 4.9,
                description: "Double beef patty with melted cheddar and caramelized onions.",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Crispy Chicken Burger",
                category: "Burgers",
                price: 750,
                rating: 4.8,
                description: "Fried crunchy chicken breast with spicy garlic mayo and pickles.",
                image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Pepperoni Passion",
                category: "Pizza",
                price: 1600,
                rating: 4.9,
                description: "Loaded with spicy beef pepperoni and fresh mozzarella cheese.",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Loaded Cheese Fries",
                category: "Sides",
                price: 600,
                rating: 4.8,
                description: "Crispy potato fries smothered in warm cheese sauce and jalapeños.",
                image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
            }
        ];

        await Food.deleteMany();
        const inserted = await Food.insertMany(sampleFoods);
        res.status(201).json({ message: 'Sample Data Seeded!', inserted });
    } catch (error) {
        res.status(500).json({ message: 'Error seeding data', error });
    }
});

// 3. Create Order
app.post('/api/orders', async (req, res) => {
    try {
        const { customerName, phone, address, items, totalAmount } = req.body;
        const newOrder = new Order({ customerName, phone, address, items, totalAmount });
        const savedOrder = await newOrder.save();
        res.status(201).json({ success: true, order: savedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Order saving failed', error });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend Server running on http://localhost:${PORT}`));