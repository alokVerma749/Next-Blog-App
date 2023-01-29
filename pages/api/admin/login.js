import User from '../../../models/User'
import connectDB from '../../../middlewares/mongoose'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).json({
                success: false,
                message: 'all fields are required'
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            res.status(401).json({
                success: false,
                message: 'user not exist'
            })
        }
        const isValidUser = await user.comparePassword(password)

        if (isValidUser) {
            const token = user.getJwtToken()
            res.status(200).json({
                success: true,
                message: 'Login success',
                token
            })
        } else {
            res.status(401).json({
                success: false,
                message: 'Enter correct Credentials'
            })
        }
    } else {
        res.status(500).json({
            success: false,
            message: 'method type not allowed',
        })
    }
}

export default connectDB(handler)