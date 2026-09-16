const express = require("express");
const { getMessages, createMessage, replyMessage, updateMessageStatus, deleteMessage } = require("../controllers/messageController");

const router = express.Router();

router.get("/", getMessages);
router.post("/", createMessage);
router.put("/:id/reply", replyMessage);
router.put("/:id/status", updateMessageStatus);
router.delete("/:id", deleteMessage);

module.exports = router;
