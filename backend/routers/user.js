const express = require('express');
const { user, login } = require('../services/userService');
const router = express.Router();

router.post('/register',user)
router.post('/login', login)

module.exports = router;