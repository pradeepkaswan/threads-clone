const mongoose = require('mongoose')

const repostSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    postId: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
)

repostSchema.index({ postId: 1, userId: 1 }, { unique: true })

const RepostModel = mongoose.model('Repost', repostSchema)

module.exports = RepostModel
