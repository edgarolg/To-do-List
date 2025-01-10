const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  deadline: { type: String, required: false },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  tags: { type: [Number], required: false },
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
