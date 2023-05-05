const express = require('express');
const { author, getAuthors } = require('../services/authorService');
const router = express.Router();

router.post('/',author)
router.get('/',getAuthors)

module.exports = router;