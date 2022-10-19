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

module.exports = savedController;