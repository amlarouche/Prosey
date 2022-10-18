const mongoose = require('mongoose');
const promptController = {}

promptController.getPrompt = async (req, res, next) => {
    try {
    res.locals.newPrompt = 'Look, new prompt!'
    console.log('inside prompt controller')
    return next();
    }
    catch(err){
        console.log(err);
        return next(err);
    }
}

module.exports = promptController;