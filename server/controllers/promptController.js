const mongoose = require('mongoose');
const promptController = {}
const axios = require('axios')
const Prompt = require('../models/promptModel')

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
        return next();
    }
    catch(err) {
        console.log(err);
        return next(err);
    }
}

promptController.savePrompt = async (req, res, next) => {
    const { prompt } = req.body;
    try {
        const newPrompt = await new Prompt.create({ prompt })
        console.log(newPrompt);
        next();
    }
    catch(err) {
        console.log(err);
        return next(err);
    }
}

module.exports = promptController;