const express = require("express");
const { getProfile, updateProfile, getJobs, getJobDetails, applyForJob } = require("../controllers/studentController");

const router = express.Router();

router.get("/profile/:id", getProfile);
router.put("/profile/:id", updateProfile);
router.get("/jobs/:studentId", getJobs);
router.get("/jobs/:jobId/student/:studentId", getJobDetails);
router.post("/apply", applyForJob);

module.exports = router;