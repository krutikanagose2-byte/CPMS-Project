const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  question: String,
  transcript: String,
  score: Number,
  feedback: String,
});

const interviewSessionSchema = new mongoose.Schema({
  company: { type: String, required: true },
  resumeText: { type: String, required: true },
  questions: [String],
  answers: [answerSchema],
  overallScore: { type: Number, default: null },
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('InterviewSession', interviewSessionSchema);
