const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    enrollmentNo: {
        type: String,
        default: "",
    },
    userEmail: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ["Placement Drive", "Document Verification", "Registration Query", "Technical Support", "General Inquiry"],
        default: "General Inquiry",
    },
    status: {
        type: String,
        enum: ["Unread", "Read", "Replied"],
        default: "Unread",
    },
    reply: {
        type: String,
        default: "",
    },
    repliedBy: {
        type: String,
        default: "",
    },
    repliedAt: {
        type: Date,
        default: null,
    }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
