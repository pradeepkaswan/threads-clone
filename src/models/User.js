const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    image: { type: String },
    bio: { type: String },
    link: { type: String },
    email: { type: String, unique: true, required: true },
    verified: { type: Boolean, default: false },
    privacy: { type: String, enum: PrivacyEnum, default: 'PUBLIC' },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
    isAdmin: { type: Boolean, default: false, alias: 'is_admin' },
    reposts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Repost' }],
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
    senderNotifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification',
        alias: 'sender_notifications',
      },
    ],
    receiverNotifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification',
        alias: 'receiver_notifications',
      },
    ],
  },
  { timestamps: true }
)

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
