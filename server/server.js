const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const { restart } = require('nodemon');

const PORT = 3000;
app.use(express.json());

//Database
const mongoURI = "mongodb+srv://alarouche:Kitchen01@cluster0.oi2zht5.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));


//Controllers
const promptController = require('./controllers/promptController')

//GET requests
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.get('/prompts', 
    promptController.getPrompt,
    (req, res) => {
        return res.status(200).json(res.locals.newPrompt)
    }
)

//POST requests
app.post('/prompts',
    promptController.savePrompt,
    (req, res) => {
        return res.status(200);
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