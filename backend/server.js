const express = require('express');
const db = require('./src/config/db');
const path = require('path');

const app = express();

const query = 'SELECT emp_name, emp_phone FROM emp WHERE emp_id = 1';

db.execute(query).then(result => console.log('User with email %s', result.rows[0].emp_name))