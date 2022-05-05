const express = require('express');
const db = require('./src/config/db');
const path = require('path');

const app = express();
var bodyParser = require('body-parser')

//disable cross origin checks
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    next();
  });

// Init Middleware
app.use(express.json());

app.use('/api/auth', require('./src/routes/api/auth'))
app.use('/api/authadmin', require('./src/routes/api/authadmin'))
app.use('/api/users', require('./src/routes/api/user'))
app.use('/api/inventory', require('./src/routes/api/inventory'))
app.use('/api/appointment', require('./src/routes/api/appointment'))


app.use(
  bodyParser.urlencoded({
      extended: false
  })
);
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));