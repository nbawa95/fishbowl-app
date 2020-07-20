const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Answers = new Schema(
    {
        questionId: { type: String, required: true },
        name: { type: String, required: true },
        answer: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('answers', Answers)
