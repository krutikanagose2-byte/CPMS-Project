const Job = require("../models/Job");

exports.getJobsByCompany = async (req, res) => {
    try {
        const { companyName } = req.params;
        // Find jobs matching the exact company name or regex for partial match
        const jobs = await Job.find({ 
            companyName: { $regex: new RegExp("^" + companyName + "$", "i") } 
        }).sort({ createdAt: -1 });
        
        res.status(200).json(jobs);
    } catch (error) {
        console.error("Error fetching jobs by company:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
