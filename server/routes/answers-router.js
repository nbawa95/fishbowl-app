const express = require('express')

const AnswersCtrl = require('../controllers/answers-ctrl')

const router = express.Router()

router.post('/answers', AnswersCtrl.addAnswer)
router.get('/answers/:id', AnswersCtrl.getAnswersById)

module.exports = router
