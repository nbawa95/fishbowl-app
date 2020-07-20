
const Topics = require('../models/topics-model')

createTopic = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a topic',
        })
    }

    const topic = new Topics(body)

    if (!topic) {
        return res.status(400).json({ success: false, error: err })
    }

    topic
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: topic._id,
                message: 'Topic created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Topic not created!',
            })
        })
}

updateTopic = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Topics.findOne({ _id: req.params.id }, (err, topic) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Topic not found!',
            })
        }
        topic.question = body.question
        topic.active = body.active
        topic
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: topic._id,
                    message: 'Topic updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Topic not updated!',
                })
            })
    })
}

deleteTopic = async (req, res) => {
    await Topics.findOneAndDelete({ _id: req.params.id }, (err, topic) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!topic) {
            return res
                .status(404)
                .json({ success: false, error: `Topic not found` })
        }

        return res.status(200).json({ success: true, data: topic })
    }).catch(err => console.log(err))
}

getTopicById = async (req, res) => {
    await Topics.findOne({ _id: req.params.id }, (err, topic) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!topic) {
            return res
                .status(404)
                .json({ success: false, error: `Topic not found` })
        }
        return res.status(200).json({ success: true, data: topic })
    }).catch(err => console.log(err))
}

getTopics = async (req, res) => {
    await Topics.find({}, (err, topics) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!topics.length) {
            return res
                .status(404)
                .json({ success: false, error: `Topic not found` })
        }
        return res.status(200).json({ success: true, data: topics.reverse() })
    }).catch(err => console.log(err))
}

module.exports = {
    createTopic,
    updateTopic,
    deleteTopic,
    getTopics,
    getTopicById,
}
