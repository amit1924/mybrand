const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Create a user model
const User = mongoose.model('User', userSchema);

// Login endpoint
app.post('/login', (req, res) => {
  // Handle login logic here
});

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
