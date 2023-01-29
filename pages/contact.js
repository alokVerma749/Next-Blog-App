import Image from 'next/Image'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [contactInfo, setcontactInfo] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        sendMessage()
        setcontactInfo({
            name: '',
            email: '',
            message: ''
        })
    }
    const sendMessage = async () => {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
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
            <div div className="bg-[#004aad] grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100 text-white md:mb-24" >
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let us talk!</h2>
                        <div className="dark:text-gray-400">Fill in the form to start a conversation</div>
                    </div>
                    <Image src={'/doodle.svg'}
                        alt="doodle"
                        width={500}
                        height={100}
                        className="p-6 h-52 md:h-64"
                    />
                </div>
                <form onSubmit={handleSubmit} noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label htmlFor='name' className="text-sm text-white">Full name</label>
                        <input value={contactInfo.name} onChange={(e) => setcontactInfo({
                            ...contactInfo,
                            name: e.target.value
                        })} id="name" type="text" required placeholder="Alok Verma" className="w-full p-3 rounded dark:bg-gray-800 text-black" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm text-white">Email</label>
                        <input value={contactInfo.email} onChange={(e) => setcontactInfo({
                            ...contactInfo,
                            email: e.target.value
                        })} id="email" type="email" placeholder='example@mail.com' required className="w-full p-3 rounded dark:bg-gray-800 text-black" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm text-white">Message</label>
                        <textarea value={contactInfo.message} onChange={(e) => setcontactInfo({
                            ...contactInfo,
                            message: e.target.value
                        })} id="message" rows="3" placeholder='Hi! Alok, I want to hire you for a freelance project....' required className="w-full p-3 rounded dark:bg-gray-800 text-black"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-indigo-400 border border-white text-white hover:text-[#004aad] hover:bg-white dark:text-gray-900">Send Message</button>
                </form>
            </div ></>
    )
}

export default Contact