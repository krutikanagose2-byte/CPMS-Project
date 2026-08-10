const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.signup = async (req, res) => {
    try {
        const { name, enrollmentNo, email, password } = req.body;

        if (!name || !enrollmentNo || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const enrollmentRegex = /^\d{2}[A-Z]{4}\d{4}$/;
        if (!enrollmentRegex.test(enrollmentNo)) {
            return res.status(400).json({ message: "Invalid Enrollment Number format. Must be like 24BTIT2005" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { enrollmentNo }] });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email or enrollment number already exists" });
        }

        // Save new user to database (password is hashed in pre-save hook)
        const newUser = new User({ name, enrollmentNo, email, password });
        await newUser.save();

        // Email options
        const mailOptions = {
            from: '"PRMIT&R College" <no-reply@prmitr.edu.in>',
            to: email,
            subject: "Welcome to PRMIT&R Placement System!",
            text: `Hello ${name},\n\nWelcome to the PRMIT&R College Placement Management System!\n\nYour account has been successfully created.\n\nYour Login Details:\nUsername (Enrollment No): ${enrollmentNo}\nPassword: ${password}\n\nBest Regards,\nPRMIT&R Placement Cell`,
            html: `
                <h3>Hello ${name},</h3>
                <p>Welcome to the <b>PRMIT&R College Placement Management System!</b></p>
                <p>Your account has been successfully created.</p>
                <h4>Your Login Details:</h4>
                <ul>
                    <li><b>Username (Enrollment No):</b> ${enrollmentNo}</li>
                    <li><b>Password:</b> ${password}</li>
                </ul>
                <p>Best Regards,<br/>PRMIT&R Placement Cell</p>
            `
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);

        return res.status(201).json({
            message: "Account created successfully! Welcome email sent."
        });

    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

exports.login = async (req, res) => {
    try {
        const { enrollmentNo, password } = req.body;

        if (!enrollmentNo || !password) {
            return res.status(400).json({ message: "Enrollment number and password are required" });
        }

        const user = await User.findOne({ enrollmentNo });
        if (!user) {
            return res.status(400).json({ message: "Invalid enrollment number or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid enrollment number or password" });
        }

        return res.status(200).json({
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email,
                enrollmentNo: user.enrollmentNo
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
