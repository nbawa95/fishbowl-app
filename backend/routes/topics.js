const router = require('express').Router();
let Topic = require('../models/topics.model');

router.route('/getTopics').get((req, res) => {
  Topic.find()
    .then(topics => res.json(topics))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  const question = req.body.question;
  const name = req.body.name;

  const newTopic = new Topic({question, name});

  newTopic.save()
    .then(() => res.json('Topic added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Topic.findById(req.params.id)
    .then(topics => res.json(topics))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
