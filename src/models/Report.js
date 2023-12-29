const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: () => cuid(),
      unique: true,
      required: true,
      index: true,
    },
    reason: { type: String },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      alias: 'reported_post',
    },
    postId: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      alias: 'reported_user',
    },
    userId: { type: String },
  },
  { timestamps: true }
)

const ReportModel = mongoose.model('Report', reportSchema)

module.exports = ReportModel
