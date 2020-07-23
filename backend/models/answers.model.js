const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionId: { type: String, required: true },
  name: { type: String, required: true },
  answer: { type: String, required: true },
}, {
  timestamps: true,
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
