const mongoose = require('mongoose')

const NotificationTypeEnum = [
  'ALL',
  'FOLLOWS',
  'REPLIES',
  'MENTIONS',
  'QUOTES',
  'REPOSTS',
  'VERIFIED',
]

const notificationSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: () => cuid(),
      unique: true,
      required: true,
      index: true,
    },
    read: { type: Boolean, default: false },
    type: { type: String, enum: NotificationTypeEnum },
    message: { type: String },
    isPublic: { type: Boolean, default: false },
    senderUserId: { type: String, required: true },
    receiverUserId: { type: String },
    senderUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      alias: 'sender',
      required: true,
    },
    receiverUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      alias: 'receiver',
    },
    postId: { type: String },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  },
  { timestamps: true }
)

const NotificationModel = mongoose.model('Notification', notificationSchema)

module.exports = NotificationModel
