const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  images: [{ type: String }],
  reportedAt: { type: Date, default: Date.now },
  priority: { type: String, enum: ['urgent', 'medium', 'low'], default: 'medium' },//خطوره ؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟
  /////////////////////////////////////////////////////////////////////////////////project id
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // المستخدم الذي قدم المشكلة
});

module.exports = mongoose.model('Issue', issueSchema);
