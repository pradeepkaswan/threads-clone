const PrivacyEnum = ['PUBLIC', 'PRIVATE']

const PostPrivacyEnum = ['FOLLOWED', 'ANYONE', 'MENTIONED']

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: { type: String },
    images: [{ type: String }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
    parentPostId: { type: String },
    parentPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      alias: 'root_post',
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        alias: 'root_post_replies',
      },
    ],
    notification: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Notification' },
    ],
    reposts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Repost' }],
    quoteId: { type: String },
    privacy: { type: String, enum: PostPrivacyEnum, default: 'ANYONE' },
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
  },
  { timestamps: true }
)

const PostModel = mongoose.model('Post', postSchema)

module.exports = PostModel
