
const express = require('express')

const TopicsCtrl = require('../controllers/topics-ctrl')

const router = express.Router()

router.post('/topics', TopicsCtrl.createTopic)
router.put('/topics/:id', TopicsCtrl.updateTopic)
router.delete('/topics/:id', TopicsCtrl.deleteTopic)
router.get('/topics/:id', TopicsCtrl.getTopicById)
router.get('/topics', TopicsCtrl.getTopics)

module.exports = router
