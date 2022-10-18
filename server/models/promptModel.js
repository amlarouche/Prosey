const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promptSchema = new Schema({
    prompt: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('prompt', promptSchema)