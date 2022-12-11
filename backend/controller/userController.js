const User = require('../models/userModel')
const Wallet = require('../models/walletModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}
// // login user
const loginUser = async (req, res) => {
    const {phone, password} = req.body
    try {
        // retrieve user and wallet
        const user = await User.login(phone, password)
        const wallet = await Wallet.findOne({ userId: user._id });
        // create a token
        const token = createToken(user._id)
    
        res.status(200).json({user, wallet, token, message : "Log in successfully"})
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

// create User
const signinUser = async (req, res) => {
    const {name, phone, email, password} = req.body
    try {
        const user = await User.signup(name, phone, email, password)
        // create new wallet for user
        const wallet =  await Wallet.create({ userId: user._id });
         // create a token
        const token = createToken(user._id)

        res.status(200).json({user, token, message: "Account created successfully"})
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    signinUser,
    loginUser
}