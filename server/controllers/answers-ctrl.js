const Answers = require('../models/answers-model')

addAnswer = (req, res) => {
  console.log("hellooooo");
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an answer',
        })
    }

    const answer = new Answers(body)

    if (!answer) {
        return res.status(400).json({ success: false, error: err })
    }

    answer
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: answer._id,
                message: 'Answer added!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Answer not added!',
            })
        })
}



getAnswersById = async (req, res) => {
  console.log(req.params.id);
    await Answers.find({ questionId: req.params.id }, (err, answer) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!answer) {
            return res
                .status(404)
                .json({ success: false, error: `Answers not found` })
        }
        return res.status(200).json({ success: true, data: answer })
    }).catch(err => console.log(err))
}

module.exports = {
    addAnswer,
    getAnswersById,
}
