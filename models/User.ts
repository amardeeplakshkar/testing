import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  telegramId: string;
  username?: string;
  points: number;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  telegramId: { type: String, required: true, unique: true },
  username: { type: String },
  points: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model<User>('User', UserSchema);
