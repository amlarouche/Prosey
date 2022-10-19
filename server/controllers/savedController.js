const mongoose = require('mongoose');
const axios = require('axios')
const Prompt = require('../models/promptModel')
const savedController = {};

savedController.getList = async (req, res, next) => {
    try {
        const promptList = await Prompt.find({});
        res.locals.list = promptList;
        return next();
    }
    catch(err) {
        return next(err);
    }
}

savedController.updatePrompt = async (req, res, next) => {
    console.log('insideupdateprompt')
    const { _id, prompt } = req.body;
    const filter = { _id };
    const update = { prompt };
    const opts = { new: true };
    try {      
        const updated = await Prompt.findOneAndUpdate(filter, update, opts);
        res.locals.updated = updated;
        return next();
    }
    catch(err) {
        return next(err)
    }
}

module.exports = savedController;