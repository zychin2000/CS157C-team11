const express = require('express');
const db = require('./src/config/db');
const path = require('path');

const app = express();

// Init Middleware
app.use(express.json());

app.use('/api/auth', require('./src/routes/api/auth'))
app.use('/api/users', require('./src/routes/api/user'))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));