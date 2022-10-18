const mongoose = require('mongoose');
const promptController = {}

promptController.getPrompt = async (req, res, next) => {
    try {
    const prompts = ['a', 'b', 'c'];
    res.locals.newPrompt = prompts[2]
    console.log('inside prompt controller')
    return next();
    }
    catch(err){
        console.log(err);
        return next(err);
    }
}

module.exports = promptController;