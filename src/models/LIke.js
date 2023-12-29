const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    postId: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
)

likeSchema.index({ postId: 1, userId: 1 }, { unique: true })

const LikeModel = mongoose.model('Like', likeSchema)

module.exports = LikeModel
