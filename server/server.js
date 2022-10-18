const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose')

const PORT = 3000;
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.use('/build', express.static(path.join(__dirname, '../build')))

app.use('*', (req, res) => {
    res.status(404).send('Not Found')
})

app.use((err, req, res, next) => {
    console.log(err)
    res.send({ err })
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  
  module.exports = app;