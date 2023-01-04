import Blog from "../../../models/Blog";
import connectDB from '../../../middleware/mongodb'
const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const blogs = await Blog.find({})
            if (!blogs) {
                res.status(500).json({
                    success: false,
                    message: 'blog fetching failed'
                })
            }
            res.status(200).json({
                success: true,
                message: 'blog fetching success',
                blogs
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'blog fetching error'
            })
        }
    }
}
export default connectDB(handler)