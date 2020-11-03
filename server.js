const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect the DB
connectDB();

app.get('/', (req, res) => res.send("API RUNNING"));

// Define the routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/blogs', require('./routes/api/blogs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));