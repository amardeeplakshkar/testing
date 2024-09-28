import dbConnect from '@/lib/mongoose';
import User from '@/models/User';

export default async function handler(req, res) {
  await dbConnect();

  const users = await User.find({}).sort({ points: -1 }).limit(50);
  res.status(200).json(users);
}
