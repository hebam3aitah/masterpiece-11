const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Location: { type: String },
  Category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  Images: [{ type: String }],
  ReportedAt: { type: Date, default: Date.now },
  DangerLvl: { type: String, enum: ['urgent', 'medium', 'low'], default: 'low' },
  ProjectID: { type: Number },
  User: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // المستخدم الذي قدم المشكلة
});

module.exports = mongoose.model('Issue', issueSchema);
