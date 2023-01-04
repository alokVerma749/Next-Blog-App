import Blog from '../../../models/Blog'
import connectDb from '../../../middlewares/mongoose'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { title, content } = req.body
            if (!title || !content) {
                throw new Error(error.message)
            }
            const blog = new Blog({
                title,
                content
            })
            await blog.save()
            res.status(200).json({
                success: true,
                message: 'blog saved successfully',
                blog
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'blog creation failed'
            })
        }
    } else {
        res.status(500).json({
            success: false,
            message: 'Request method not permitted'
        })
    }
}

export default connectDb(handler)