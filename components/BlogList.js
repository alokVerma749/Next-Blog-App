import Image from 'next/image'
import Link from 'next/link'

const BlogList = ({ blogs }) => {
    if (blogs.length < 1) {
        return (
            <>
                <h1>NO blogs found</h1>
            </>
        )
    }
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        blogs.map((blog) => {
                            return (
                                <Link key={blog._id} href={`/post/${blog._id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
                                    <Image height={360} width={480} alt="" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                                        <span className="text-xs text-gray-600">January 23, 2021</span>
                                        <p>{blog.content.substring(0,200)}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600">Load more posts...</button>
                </div>
            </div>
        </section>
    )
}

export default BlogList