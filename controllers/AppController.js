const Tweets = require('../models/Tweets');
const moment = require('moment');

exports.indexPage = async (req, res) => {
	const tweets = await Tweets.find({}).sort({date: -1})
	res.render('index', {tweets, moment})
}


// Posting a new tweet
exports.postTweet = async (req, res) => {
	const tweet = new Tweets(req.body);
	try {
		await tweet.save()
		res.redirect('/?message=success')
	} catch (e) {
		console.log(e);
		res.redirect('/?message=error')
	}

}


// Single tweet page
exports.singleTweet = async (req, res) => {
	const tweet = await Tweets.findOne({_id: req.params.id})
	res.render('single', {tweet, moment})
}
