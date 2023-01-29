import connectDB from "../../middlewares/mongoose"
import UserContact from '../../models/UserContact'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { name, email, message } = req.body
            if (!name || !email || !message) {
                res.status(500).json({
                    success: false,
                    message: 'Fill up all fields',
                })
            }
            const contact = new UserContact({
                name,
                email,
                message,
                sentAt: Date.now()
            })
            await contact.save()
            res.status(200).json({
                success: true,
                message: 'message send successfully',
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'message delivery failed'
            })
        }
    }
}

export default connectDB(handler)
