import connectDB from "../../../middlewares/mongoose"
import Blog from '../../../models/Blog'

const handler = async (req, res) => {
    if (req.method === 'DELETE') {
        const { blogid } = req.query
        try {
            if (!blogid) {
                res.status(500).json({
                    success: false,
                    message: 'Blog not found',
                })
            }
            const blog = await Blog.findByIdAndDelete(blogid)
            if (!blog) {
                res.status(500).json({
                    success: false,
                    message: 'Blog not found',
                })
            }
            res.status(200).json({
                success: true,
                message: 'Blog deleted successfully',
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Blog deletion failed'
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