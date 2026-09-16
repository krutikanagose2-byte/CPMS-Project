const Message = require("../models/Message");

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.createMessage = async (req, res) => {
    try {
        const { userName, enrollmentNo, userEmail, subject, message, category } = req.body;
        if (!userName || !userEmail || !subject || !message) {
            return res.status(400).json({ message: "Name, email, subject and message are required" });
        }

        const newMsg = new Message({
            userName,
            enrollmentNo: enrollmentNo || "",
            userEmail,
            subject,
            message,
            category: category || "General Inquiry"
        });

        await newMsg.save();
        res.status(201).json({ message: "Message sent successfully", data: newMsg });
    } catch (error) {
        console.error("Error creating message:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.replyMessage = async (req, res) => {
    try {
        const { reply, repliedBy } = req.body;
        if (!reply) {
            return res.status(400).json({ message: "Reply text is required" });
        }

        const msg = await Message.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    reply,
                    repliedBy: repliedBy || "Placement Administrator",
                    repliedAt: new Date(),
                    status: "Replied"
                }
            },
            { new: true }
        );

        if (!msg) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.status(200).json({ message: "Reply saved successfully", data: msg });
    } catch (error) {
        console.error("Error replying to message:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.updateMessageStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const msg = await Message.findByIdAndUpdate(
            req.params.id,
            { $set: { status } },
            { new: true }
        );

        if (!msg) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.status(200).json({ message: `Status updated to ${status}`, data: msg });
    } catch (error) {
        console.error("Error updating message status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.deleteMessage = async (req, res) => {
    try {
        const msg = await Message.findByIdAndDelete(req.params.id);
        if (!msg) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        console.error("Error deleting message:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
