const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate user Token
const generateToken = (id) => {
    return jwt.sign({id}, {
        expiresIn: "7d",
    });
};

// Register User and Sign In
const register = async (req, res) => {
    res.send("Registro");
};

module.exports = {
    register,
};