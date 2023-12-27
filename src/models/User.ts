import mongoose, { Document, Schema, Types } from 'mongoose'

enum Privacy {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

enum NotificationType {
  ALL = 'ALL',
  REQUESTS = 'REQUESTS',
  REPLIES = 'REPLIES',
  MENTIONS = 'MENTIONS',
  QUOTES = 'QUOTES',
  VERIFIED = 'VERIFIED',
}

enum PostPrivacy {
  FOLLOWED,
  ANYONE,
  MENTIONED,
}

interface UserDocument extends Document {}

const userSchema = new Schema<UserDocument>({})

const User = mongoose.model<UserDocument>('User', userSchema)

export { User }
