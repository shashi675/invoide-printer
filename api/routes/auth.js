const express = require("express");
const router = express.Router();
const { generateToken } = require("../jwt");
const mongoose = require("mongoose");


// Define a Mongoose schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Create a Mongoose model using the schema
const user = mongoose.model('user', UserSchema);

const signup = async (req, res) => {
    try {

        const newUser = new user({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        // check if user already exists
        const userExist =   await user.findOne({email: newUser.email});
        if(userExist) {
            return res.status(409).json({error: "user already registered"});
        }
        else {
            // user does not exist, create one
            try {
                await newUser.save();
                res.status(200).json({message: "user created successfully"});
            } catch (err) {
                res.status(500).json({error: "internal server error"});
            }
        }
    }
    catch(err) {
        res.status(500).json({error: "internal server error"});
    }
}


const login = async (req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;
    
        // search for the user
        const existingUser = await user.findOne({email: email});
        if(!existingUser) return res.status(404).json({error: "user does not exist"});
        else {
            // match password
            const correctPassword = existingUser.password;
            const passwordMatched = correctPassword === pass;
            if(!passwordMatched) {
                return res.status(400).json({error: "wrong credentials"});
            }
            // password matches, generate token
            const payLoad = email;
            const token = generateToken(payLoad);

            // remove the user password from the data to return
            const { password, __v, _id, ...remainingUserData } = existingUser.toJSON();
            remainingUserData["token"] = token;

            console.log(remainingUserData)
            res.status(200).json({ message: "Login successfull", userData: remainingUserData });
        }
    }
    catch(err) {
        return res.status(500).json({error: "internal server error"});
    }
}


// route for signup and login
router.post("/register", signup);
router.post("/login", login);


module.exports = router;