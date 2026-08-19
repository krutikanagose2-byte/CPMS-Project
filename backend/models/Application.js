const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    status: {
        type: String,
        enum: ["Applied", "Shortlisted", "Selected", "Rejected"],
        default: "Applied",
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
