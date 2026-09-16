const User = require("../models/User");
const Job = require("../models/Job");
const Application = require("../models/Application");
const { checkEligibility } = require("../utils/eligibilityEngine");

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updateData = { ...req.body };
        delete updateData.password;
        delete updateData._id;

        if (updateData.resume && updateData.resume.url && !updateData.resumeUrl) {
            updateData.resumeUrl = updateData.resume.url;
        } else if (updateData.resumeUrl && (!updateData.resume || !updateData.resume.url)) {
            updateData.resume = updateData.resume || {};
            updateData.resume.url = updateData.resumeUrl;
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: updateData },
            { new: true, runValidators: false }
        ).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const student = await User.findById(req.params.studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const jobs = await Job.find().sort({ createdAt: -1 });
        
        // Evaluate eligibility for each job
        const jobsWithEligibility = jobs.map(job => {
            const eligibility = checkEligibility(student, job);
            return {
                ...job._doc,
                eligibility
            };
        });

        res.status(200).json(jobsWithEligibility);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getJobDetails = async (req, res) => {
    try {
        const { studentId, jobId } = req.params;
        const student = await User.findById(studentId);
        const job = await Job.findById(jobId);

        if (!student || !job) {
            return res.status(404).json({ message: "Student or Job not found" });
        }

        const eligibility = checkEligibility(student, job);
        
        // Find existing application if any
        const application = await Application.findOne({ studentId, jobId });

        // Basic mock logic for study material recommendations
        const skillGap = job.requiredSkills.filter(skill => !student.skills.includes(skill));
        const recommendations = skillGap.map(skill => ({
            skill,
            resource: `Search for ${skill} tutorials on Coursera/Udemy/YouTube`
        }));

        res.status(200).json({
            job,
            eligibility,
            applicationStatus: application ? application.status : null,
            skillGap,
            recommendations
        });
    } catch (error) {
        console.error("Error fetching job details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.applyForJob = async (req, res) => {
    try {
        const { studentId, jobId } = req.body;
        
        const existingApp = await Application.findOne({ studentId, jobId });
        if (existingApp) {
            return res.status(400).json({ message: "Already applied for this job" });
        }

        const newApp = new Application({ studentId, jobId });
        await newApp.save();

        res.status(201).json({ message: "Applied successfully", application: newApp });
    } catch (error) {
        console.error("Error applying for job:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.verifyStudent = async (req, res) => {
    try {
        const { status, remark, verifiedBy } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    verificationStatus: status || "Verified",
                    verificationRemark: remark || "",
                    verifiedBy: verifiedBy || "Administrator",
                    verifiedAt: new Date()
                }
            },
            { new: true }
        ).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: `Student status updated to ${status}`, user });
    } catch (error) {
        console.error("Error verifying student:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.updateRegistrationStatus = async (req, res) => {
    try {
        const { status, remark, verifiedBy } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    registrationStatus: status || "Accepted",
                    verificationStatus: status === "Accepted" ? "Verified" : "Rejected",
                    verifiedBy: verifiedBy || "Placement Administrator",
                    verifiedAt: new Date(),
                    verificationRemark: remark || (status === "Accepted" ? "Registration verified and accepted by administrator" : "Registration rejected")
                }
            },
            { new: true }
        ).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: `Registration request ${status} successfully`, user });
    } catch (error) {
        console.error("Error updating registration status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

