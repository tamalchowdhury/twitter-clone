const express = require('express');
const AppController = require('../controllers/AppController');
const router = express.Router();
const moment = require('moment');

router.get('/', AppController.indexPage);

// Posting a new tweet
router.post('/tweet', AppController.postTweet);

// Single tweet page
router.get('/tweet/:id', AppController.singleTweet);

module.exports = router;
