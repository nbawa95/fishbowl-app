const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  question: { type: String, required: true },
  name: { type: String, required: false },
}, {
  timestamps: true,
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
