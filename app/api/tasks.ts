import dbConnect from '@/lib/mongoose';
import Task from '@/models/Task';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const tasks = await Task.find({});
    return res.status(200).json(tasks);
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
