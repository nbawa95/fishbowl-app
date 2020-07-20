
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Topics = new Schema(
    {
        question: { type: String, required: true },
        name: { type: String, required: true },
        active: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('topics', Topics)
