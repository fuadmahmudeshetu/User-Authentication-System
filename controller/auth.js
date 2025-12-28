const User = require('../model/User')

const register = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password })

    res.status(201).json({ user })

}

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'please enter all fields' })
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }

    res.status(200).json({ message: 'Login Successful' })
}


module.exports = { register, login }