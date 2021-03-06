const express = require('express');
const app = express();

const path = require('path');

const public = path.resolve(__dirname, '../public');

app.use(express.static(public));


module.exports = app;