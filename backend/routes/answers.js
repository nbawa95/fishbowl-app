const router = require('express').Router();
let Answer = require('../models/answers.model');

router.route('/getAnswers').get((req, res) => {
  Answer.find()
    .then(answers => res.json(answers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const questionId = req.body.questionId;
  const name = req.body.name;
  const answer = req.body.answer;

  const newAnswer = new Answer({
    questionId,
    name,
    answer,
  });

  newAnswer.save()
  .then(() => res.json('Answer added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Answer.find({ questionId: req.params.id })
    .then(answers => res.json(answers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/deleteAnswer/:id').delete((req, res) => {
  Answer.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.json('Answer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
