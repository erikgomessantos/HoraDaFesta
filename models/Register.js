const mongoose = require("mongoose");
const { Schema } = mongoose;

const registerSchema = new Schema({
    name: String,
    email: String,
    password: String
}, {timestamps: true}
);

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;