import dbConnect from '@/lib/mongoose';
import User from '@/models/User';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { telegramId, username } = req.body;

    const existingUser = await User.findOne({ telegramId });
    if (existingUser) {
      return res.status(200).json(existingUser);
    }

    const newUser = await User.create({ telegramId, username });
    return res.status(201).json(newUser);
  }
  
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
