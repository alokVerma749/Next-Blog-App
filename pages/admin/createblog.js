import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'editor.js';
import 'editor.css';
import 'editor.html';


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
        try {
            const res = await fetch('/api/admin/createblog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blog)
            })
            const response = await res.json()
            if (response.success) {
                toast.success(response.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.error(response.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
        </>
    )
}

export default Createblog