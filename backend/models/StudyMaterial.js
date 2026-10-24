const mongoose = require("mongoose");

const studyMaterialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    type: {
        type: String,
        enum: ["video", "pdf", "notes", "course"],
        default: "video",
        required: [true, "Resource type is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        trim: true,
    },
    url: {
        type: String,
        required: [true, "Resource URL is required"],
        trim: true,
    },
    thumbnail: {
        type: String,
        default: "",
        trim: true,
    },
    author: {
        type: String,
        default: "PRMIT&R Placement Cell",
        trim: true,
    },
    description: {
        type: String,
        default: "",
        trim: true,
    },
    company: {
        type: String,
        default: "All Companies",
        trim: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdByName: {
        type: String,
        default: "Placement Officer",
    },
}, { timestamps: true });

// Auto-generate YouTube thumbnail if not provided and type is video
studyMaterialSchema.pre("save", function() {
    if (this.type === "video" && (!this.thumbnail || this.thumbnail.trim() === "") && this.url) {
        const ytMatch = this.url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
        if (ytMatch && ytMatch[1]) {
            this.thumbnail = `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
        }
    }
});

const StudyMaterial = mongoose.model("StudyMaterial", studyMaterialSchema);

module.exports = StudyMaterial;
