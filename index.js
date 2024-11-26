// Import packages
const express = require('express')
const dotenv = require('dotenv')

// assigning an express value to app
const app = express()
dotenv.config()

// Define a port
const PORT = process.env.PORT || 3000

// Middleware to parse JSON requests
// app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Express app!');
});

// Example route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello, API!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
