import connectDB from '../../../middleware/mongodb'
import Blog from '../../../models/Blog'

const handler = async (req, res) => {
    const { id } = req.params
    const blog = await Blog.findById(id)
    res.status(200).json({
        success: true,
        message: 'blog fetched successfully',
        blog
    })
}

export default connectDB(handler)