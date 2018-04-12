const mongoose = require('mongoose');
const tweetSchema = new mongoose.Schema(
	{
		tweet: {
			type: String,
			max: 140,
			required: "Tweets cannot be empty"
		},
		date: {
			type: Date,
			default: Date.now()
		}
	}
)

module.exports = mongoose.model('Tweets', tweetSchema);
