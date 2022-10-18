const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const { restart } = require('nodemon');

const PORT = 3000;
app.use(express.json());

//Controllers
const promptController = require('./controllers/promptController')

//GET requests
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.get('/prompts', 
    promptController.getPrompt,
    (req, res) => {
        console.log('inside app.get prompts')
        return res.status(200).json(res.locals.newPrompt)
    }
)

app.use('/build', express.static(path.join(__dirname, '../build/')))

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