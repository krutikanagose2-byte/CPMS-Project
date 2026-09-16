const express = require('express');
const router = express.Router();
const { startInterview, submitInterview } = require('../controllers/interviewController');

// POST /api/interview/start  — upload resume + generate questions
router.post('/start', startInterview);

// POST /api/interview/submit — submit answers + get AI evaluation
router.post('/submit', express.json(), submitInterview);

module.exports = router;
