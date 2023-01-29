import connectDB from "../../../middlewares/mongoose"
import UserContact from '../../../models/UserContact'

const handler = async (req, res) => {
    if (req.method === 'DELETE') {
        const { messageid } = req.query
        try {
            if (!messageid) {
                res.status(500).json({
                    success: false,
                    message: 'message not found',
                })
            }
            const message = await UserContact.findByIdAndDelete(messageid)
            if (!message) {
                res.status(500).json({
                    success: false,
                    message: 'message not found',
                })
            }
            res.status(200).json({
                success: true,
                message: 'message deleted successfully',
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'message deletion failed'
            })
        }
    } else {
        res.status(500).json({
            success: false,
            message: 'request type not allowed'
        })
    }
}

export default connectDB(handler)