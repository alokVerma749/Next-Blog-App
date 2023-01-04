import { useState } from "react"
const Createblog = () => {
    const [blog, setBlog] = useState({
        title: '',
        content: ''
    })
    const handleClick = (e) => {
        e.preventDefault()
        submitData()
        setBlog({
            title: '',
            content: ''
        })
    }
    // TODO: embedd an editor
    const submitData = async () => {
        await fetch('/api/admin/createblog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
    }

    return (
        <div className="cotainer p-5 m-5 h-[50vh] w-[50vw] mx-auto shadow-lg">
            <form onSubmit={handleClick} className="flex flex-col justify-evenly">
                <label htmlFor="title" className="mx-auto">Title</label>
                <input value={blog.title} onChange={(e) => setBlog({
                    ...blog,
                    title: e.target.value
                })} id="title" name='title' type="text" className="bg-gray-200 h-10 text-base p-2" />
                <label htmlFor="content" className=" mx-auto">Content</label>
                <input value={blog.content} onChange={(e) => setBlog({
                    ...blog,
                    content: e.target.value
                })} id="content" name='content' type="text" className="bg-gray-200 h-40 text-base" />
                <button className="border border-gray-500 w-fit mx-auto m-5 rounded-md p-2 hover:bg-orange-300">Submit</button>
            </form>
        </div >
    )
}

export default Createblog