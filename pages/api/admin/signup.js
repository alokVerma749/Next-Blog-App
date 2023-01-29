import User from '../../../models/User'
import connectDB from '../../../middlewares/mongoose'


const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, password } = req.body
        console.log(req.body)
        if (!name || !email || !password) {
            res.status(401).json({
                success: false,
                message: 'all fields are required'
            })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            console.log(existingUser)
            res.status(401).json({
                success: false,
                message: 'user already exist'
            })
        }
        try {
            // const user = await User.create({
            //     name,
            //     email,
            //     password
            // })
            const user = new User({
                name,
                email,
                password
            })
            // TODO: need to encrypt passsword
            await user.save()
            user.password = null
            res.status(200).json({
                success: true,
                message: 'user signed up successfully',
                user
            })
        } catch (error) {
            throw new Error(error.message)
        }
    } else {
        res.status(500).json({
            success: false,
            message: 'req method not supported'
        })
    }
}
export default connectDB(handler)