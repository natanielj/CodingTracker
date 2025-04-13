const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Project title
    description: { type: String }, // Project description
    coding_language: { type: String }, // Programming language used
    hours_logged: { type: Number, default: 0 }, // Total hours logged for the project
    github_link: { type: String }, // GitHub repository link
    status: { type: String, enum: ["Active", "Completed", "On Hold"], default: "Active" }, // Project status
    tasks: {
        active: { type: [String], default: [] }, // List of active tasks
        completed: { type: [String], default: [] }, // List of completed tasks
    },
    createdAt: { type: Date, default: Date.now }, // Project creation date
});

const recentActivitySchema = new mongoose.Schema({
    activityType: { type: String, required: true }, // e.g., "coding", "reviewing", etc.
    timestamp: { type: Date, default: Date.now },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    details: { type: String },
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // GitHub OAuth username
    totalSessions: { type: Number, default: 0 }, // Total hours logged
    countStreak: { type: Number, default: 0 }, // Current streak count
    largestStreak: { type: Number, default: 0 }, // Largest streak count
    projects: [projectSchema], // Array of projects
    currentGoal: { type: Number, default: 0 }, // Current goal in hours
    recentActivity: [recentActivitySchema], // Array of recent activities
});

const User = mongoose.model('User', userSchema);

module.exports = User;