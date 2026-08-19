const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    package: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    requiredSkills: {
        type: [String],
        default: [],
    },
    description: {
        type: String,
        default: "",
    },
    criteria: {
        minCgpa: { type: Number, default: 0 },
        minTenth: { type: Number, default: 0 },
        minTwelfth: { type: Number, default: 0 },
        minDiploma: { type: Number, default: 0 },
        maxBacklogs: { type: Number, default: 0 },
        allowedBranches: { type: [String], default: [] },
        targetGradYear: { type: Number, default: new Date().getFullYear() },
    },
    deadline: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
