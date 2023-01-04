import Image from "next/image"
import mongoose from 'mongoose'
import Blog from '../../models/Blog'

const Blogi = ({ blog }) => {
    return (
        <>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <Image height={360} width={480} src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{blog.title}</a>
                            <p className="text-xs text-gray-400">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline"> Alok Verma</a>
                            </p>
                        </div>
                        <div className="text-gray-100">
                            <p>{blog.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.mongodburl);
    }
    const { blogid } = context.params;
    const response = await Blog.findById(blogid)
    const blog = await JSON.parse(JSON.stringify(response))
    return {
        props: { blog: blog }
    }
}
export default Blogi;