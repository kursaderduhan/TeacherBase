const express = require('express');
const author = require('./author');
const user = require('./user');
const { checkAuth } = require('../services/userService');
const router = express.Router();

router.use("/authors",checkAuth, author)
router.use("/user", user)

module.exports = router;