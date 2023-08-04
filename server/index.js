const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('dotenv').config();

const port = process.env.STATUS === 'production' ? process.env.PROD_PORT : process.env.DEV_PORT;

const package = require('./package.json');

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/api/version', (req, res) => {
    return res.status(200).json({ version: package.version });
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
})

app.listen(port, () =>  console.log(`Portfolio listening on port ${port}!`));