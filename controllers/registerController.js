const Register = require("../models/Register");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Generating token
const generateToken = (id) => {
    return jwt.sign({ id }, {
        expiresIn: "7d",
    });
};

// Register User and Sign In
const register = async(req, res) => {

    const {name, email, password} = req.body;

    // Check if user exists
    const register = await Register.findOne({email});

    if(register) {
        res.status(422).json({errors: ["Por favor, utilize outro e-mail"]})
        return
    }

    // Generate password hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Creating a User
    const newUser = await Register.create({
        name,
        email,
        password: passwordHash
    })

    // If user was created successfully
    if(!newUser) {
        res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde"]})
        return
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)
    })
};

// User login
const login = async(req, res) => {

    const {email, password} = req.body;

    const user = await Register.findOne({email});

    // Check if user exists
    if(!user) {
        res.status(404).json({errors: ["Usuário não encontrado"]})
        return
    }

    // Check password match
    if(!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({errors: ["Senha inválida"]})
        return
    }

    // Return user with token
    res.status(201).json({
        _id: user._id,
        token: generateToken(user._id)
    })
};

module.exports = {
    register,
    login,
};