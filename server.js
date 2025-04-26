import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from "body-parser";

import User from "./models/userSchema.js";

const app = express()
app.use(bodyParser.json());
app.use(cors())
const dbURI = 'mongodb+srv://faisaal8898:Itft6CjJmPrkM1nM@cluster0.bi9vkxz.mongodb.net/nextTripDB?retryWrites=true&w=majority';


// mongoose.connect(dbURI)
//     .then(() => {
//         console.log('Connected to MongoDB')
//         app.listen(9090, () => {
//             console.log("sever has started in 9090 port")
//         })
//     }
//     )
//     .catch((error) => console.error('Connection error', error));


app.post('/signup', async (req, res) => {
    const { userID, userMail, password } = req.body;

    if (!userID || !userMail || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if userMail or userID already exists
        const existingUser = await User.findOne({ $or: [{ userMail }, { userID }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Save the user
        const user = new User({ userID, userMail, password });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Sign-In Route
app.post('/signin', async (req, res) => {
    const { userMail, password } = req.body;

    if (!userMail || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if user exists
        const user = await User.findOne({ userMail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


await mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB')

    }
    )
    .catch((error) => console.error('Connection error', error));

app.listen(9090, () => {
    console.log("sever has started in 9090 port")
})