const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
	{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		text: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
)

module.exports = mongoose.model("Post", postSchema)
