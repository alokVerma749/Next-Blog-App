import BlogList from '../components/BlogList'
import mongoose from 'mongoose'
import Blog from '../models/Blog'

const Blogs = ({ blogs }) => {
    return (
        <>
            <h1 className="text-center text-3xl">BLOGS</h1>
            <BlogList blogs={blogs} />
        </>
    )
}
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.mongodburl);
    }
    const response = await Blog.find({})
    const blogs = await JSON.parse(JSON.stringify(response))
    return {
        props: { blogs: blogs }
    }
}

export default Blogs