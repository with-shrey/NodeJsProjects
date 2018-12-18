const router = require('express').Router();
const ConversationController = require('../controller/conversation.controller')
router.post('/new',ConversationController.newMessage)
router.get('/:userId',ConversationController.getAllMessages)

module.exports = router