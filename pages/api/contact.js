import connectDB from "../../middlewares/mongoose"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // Process a POST request
        try {
            const { name, email, message } = req.body
            res.status(200).json({
                name,
                email,
                message
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default connectDB(handler)
