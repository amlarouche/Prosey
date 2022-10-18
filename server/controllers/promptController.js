const mongoose = require('mongoose');
const promptController = {}
const axios = require('axios')

promptController.getPrompt = async (req, res, next) => {
    try {
        const promptList = await axios.get('https://www.reddit.com/r/WritingPrompts/hot.json');
        const prompts = promptList.data.data.children
            .map(el => el.data.title)
            .filter(el => {
                return el.split(' ')[0] === '[WP]'
            })
            .map(el => {
                return el.split(' ').slice(1).join(' ')
            })
        res.locals.newPrompt = prompts[Math.floor(Math.random() * prompts.length + 1)]
        console.log('inside prompt controller')
        return next();
    }
    catch(err){
        console.log(err);
        return next(err);
    }
}

module.exports = promptController;