const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const { restart } = require('nodemon');
const bodyParser = require('body-parser');

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database
const mongoURI = "mongodb+srv://alarouche:Kitchen01@cluster0.oi2zht5.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));


//Controllers
const promptController = require('./controllers/promptController')
const savedController = require('./controllers/savedController')

//GET requests

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
});

app.get('/prompts', 
    promptController.getPrompt,
    (req, res) => {
        return res.status(200).json(res.locals.newPrompt)
    }
);

app.get('/saved', 
    savedController.getList,
    (req, res) => {
        return res.status(200).json(res.locals.list)
    }
);

app.get('/prompts/:id',
    promptController.editSaved,
    (req, res) => {
        return res.status(200).json(res.locals.response)
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