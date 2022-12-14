const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promptSchema = new Schema({
    prompt: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date().toDateString()
    }
})

module.exports = mongoose.model('prompt', promptSchema)