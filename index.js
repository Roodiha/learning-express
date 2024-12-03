// Import packages
const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

// assigning an express value to app
const app = express()
dotenv.config()

// Define a port
const PORT = process.env.PORT || 3000

// Middleware to parse JSON requests
// app.use(express.json());

// use ejs as view engine
app.set('view engine', 'ejs')

// serve static files
app.use(express.static(path.join(__dirname,'public')))

// Home route
app.get('/', (req, res) => {
  res.render('index', {
    title : 'Home', 
    logo: 'CodingLab',
    list1: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    feedback: 'Feedback',
    button1: "Learn More",
    button2: "Subscribe"
  })
  // res.sendFile(path.join(__filename, 'public/index.html'))
  // res.send('Welcome to the Express app!');
});

// Example   route
// app.get('/api', (req, res) => {
//     res.json({ message: 'Hello, API!' });
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
