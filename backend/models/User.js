const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    enrollmentNo: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // New fields for Student Module
    branch: {
        type: String,
        default: "",
    },
    cgpa: {
        type: Number,
        default: 0,
    },
    tenthPercentage: {
        type: Number,
        default: 0,
    },
    twelfthPercentage: {
        type: Number,
        default: 0,
    },
    diplomaPercentage: {
        type: Number,
        default: 0,
    },
    backlogCount: {
        type: Number,
        default: 0,
    },
    graduationYear: {
        type: Number,
        default: new Date().getFullYear(),
    },
    skills: {
        type: [String],
        default: [],
    },
    resumeUrl: {
        type: String,
        default: "",
    },
    dob: {
        type: String,
        default: "",
    },
    gender: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    linkedin: {
        type: String,
        default: "",
    },
    github: {
        type: String,
        default: "",
    },
    photoUrl: {
        type: String,
        default: "",
    },
    signatureUrl: {
        type: String,
        default: "",
    },
    academics: {
        type: [
            {
                id: Number,
                course: String,
                institute: String,
                board: String,
                score: String,
                year: String
            }
        ],
        default: [
            { id: 1, course: 'B.E/B.Tech', institute: '', board: '', score: '', year: '' },
            { id: 2, course: 'Diploma', institute: '', board: '', score: '', year: '' },
            { id: 3, course: '12th (HSC)', institute: '', board: '', score: '', year: '' },
            { id: 4, course: '10th (SSC)', institute: '', board: '', score: '', year: '' },
        ]
    },
    myDocuments: {
        type: [
            {
                id: Number,
                name: String,
                type: { type: String },
                date: String,
                icon: String,
                uploaded: Boolean,
                fileUrl: String
            }
        ],
        default: []
    }
});

userSchema.pre("save", async function() {
    if (!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
