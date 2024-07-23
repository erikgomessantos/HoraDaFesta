const mongoose = require("mongoose");
const { Schema } = mongoose

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
 },
 { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;