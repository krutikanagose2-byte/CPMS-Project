require("dotenv").config();
const mongoose = require("mongoose");
const Message = require("../models/Message");

const seedMessages = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/cpms");
        console.log("Connected to MongoDB");

        const count = await Message.countDocuments();
        if (count === 0) {
            const sampleMessages = [
                {
                    userName: "Krutika Nagose",
                    enrollmentNo: "21BTCS101",
                    userEmail: "krutika.n@prmitr.edu.in",
                    subject: "TCS Digital Drive Eligibility & Schedule",
                    message: "Respected Sir, I have a CGPA of 8.42 and no active backlogs. Could you please confirm if the upcoming TCS Digital drive has an online assessment round on campus or from home? Also, please let me know if updated resumes need to be submitted physically.",
                    category: "Placement Drive",
                    status: "Unread",
                    createdAt: new Date(Date.now() - 1000 * 60 * 45) // 45 mins ago
                },
                {
                    userName: "Rohan Sharma",
                    enrollmentNo: "21BTIT204",
                    userEmail: "rohan.sharma@gmail.com",
                    subject: "Marksheet Verification for Capgemini Drive",
                    message: "Hello Admin, I have uploaded my 5th and 6th semester provisional marksheets in the portal. Please verify and approve them so my profile reflects 100% verification for the Capgemini recruitment drive.",
                    category: "Document Verification",
                    status: "Replied",
                    reply: "Dear Rohan, your marksheets have been verified and approved in the database. Your eligibility status is now verified. Best of luck for Capgemini!",
                    repliedBy: "T&P Cell Administrator",
                    repliedAt: new Date(Date.now() - 1000 * 60 * 120),
                    createdAt: new Date(Date.now() - 1000 * 60 * 300)
                },
                {
                    userName: "Snehal Deshmukh",
                    enrollmentNo: "22BTETC045",
                    userEmail: "snehal.d@prmitr.edu.in",
                    subject: "Registration Approval & Portal Access",
                    message: "Sir, I submitted my new student registration request for the CPMS portal. My enrollment ID is 22BTETC045. Kindly verify my registration so that I can download company-specific preparation guides and notes.",
                    category: "Registration Query",
                    status: "Unread",
                    createdAt: new Date(Date.now() - 1000 * 60 * 180)
                },
                {
                    userName: "Aditya Verma",
                    enrollmentNo: "21BTME089",
                    userEmail: "aditya.v@yahoo.com",
                    subject: "AI Mock Interview Session Reset Request",
                    message: "Hi, during the AI mock interview session for Tech Mahindra, the webcam audio disconnected at question 3. Could you please reset my test session token so I can re-attempt the assessment?",
                    category: "Technical Support",
                    status: "Read",
                    createdAt: new Date(Date.now() - 1000 * 60 * 720)
                }
            ];

            await Message.insertMany(sampleMessages);
            console.log(`Seeded ${sampleMessages.length} sample user messages successfully!`);
        } else {
            console.log(`Already has ${count} messages. No seeding needed.`);
        }
        process.exit(0);
    } catch (err) {
        console.error("Error seeding messages:", err);
        process.exit(1);
    }
};

seedMessages();
