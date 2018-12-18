const router = require('express').Router();
const UserController = require('../controller/user.controller')
router.post('/register',UserController.registerUser)
router.get('/',UserController.getUser)

module.exports = router