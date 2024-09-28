import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  label: { type: String, required: true },
  amount: { type: Number, required: true },
});

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
