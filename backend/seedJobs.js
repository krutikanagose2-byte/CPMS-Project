require("dotenv").config();
const mongoose = require("mongoose");
const Job = require("./models/Job");
const connectDB = require("./config/db");

const seedJobs = async () => {
    await connectDB();
    
    // Clear existing jobs to prevent duplicates during testing
    await Job.deleteMany({});
    console.log("Cleared existing jobs");

    const tcsJobs = [
        {
            companyName: "TCS",
            role: "Software Engineer",
            package: "₹7.0 LPA",
            location: "Pune\nHybrid",
            requiredSkills: ["Java", "React", "SQL"],
            description: "Develop and maintain software applications.",
            criteria: {
                minCgpa: 6.5,
                allowedBranches: ["BE/BTech", "MCA"],
                targetGradYear: 2025
            },
            deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
        },
        {
            companyName: "TCS",
            role: "Systems Engineer",
            package: "₹6.0 LPA",
            location: "Pune\nHybrid",
            requiredSkills: ["Python", "Linux", "Networking"],
            description: "System administration and troubleshooting.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech", "MCA"],
                targetGradYear: 2025
            },
            deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
        },
        {
            companyName: "TCS",
            role: "Data Analyst",
            package: "₹5.5 LPA",
            location: "Pune\nHybrid",
            requiredSkills: ["SQL", "Excel", "PowerBI"],
            description: "Analyze large datasets and create reports.",
            criteria: {
                minCgpa: 6.0,
                allowedBranches: ["BE/BTech", "MCA"],
                targetGradYear: 2025
            },
            deadline: new Date(Date.now()) // Today
        },
        {
            companyName: "TCS",
            role: "Associate Consultant",
            package: "₹8.0 LPA",
            location: "Pune\nHybrid",
            requiredSkills: ["Consulting", "Communication", "Agile"],
            description: "Consult with clients on IT transformations.",
            criteria: {
                minCgpa: 7.0,
                allowedBranches: ["BE/BTech", "MCA"],
                targetGradYear: 2025
            },
            deadline: new Date(Date.now() + 26 * 24 * 60 * 60 * 1000) // 26 days from now
        }
    ];

    await Job.insertMany(tcsJobs);
    console.log("Jobs seeded successfully!");
    process.exit();
};

seedJobs();
