import mongoose from 'mongoose'
import UserContact from '../../../models/UserContact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const Chat = ({ contacts }) => {
    const router = useRouter()
    const handleMessageDelete = async (id) => {
        const res = await fetch(`/api/admin/${id}`, {
            method: "DELETE"
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
            router.push('/admin/dashboard/chat')
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
            <div className="container p-2 mx-auto sm:p-4 text-gray-800">
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
                <style jsx global>
                    {`
                    .footer {
                     display: none;
                    }
                `}
                </style>
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Messages</h2>
                <div className="flex flex-col overflow-x-auto text-xs space-y-4">
                    <div className="flex text-left bg-gray-300">
                        <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                            <input type="checkbox" name="All" className="w-3 h-3 rounded-sm accent-indigo-600" />
                        </div>
                        <div className="w-32 px-2 py-3 sm:p-3">Sender</div>
                        <div className="w-32 px-2 py-3 sm:p-3">Sender Email</div>
                        <div className="flex-1 px-2 py-5 sm:p-3">Message</div>
                        <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block">Received</div>
                    </div>
                    {
                        contacts.map((contact => {
                            const date = new Date(Number(contact.sentAt)).toDateString()
                            console.log(date)
                            return (
                                <div key={contact._id} className="flex border-b border-opacity-20 border-gray-300 bg-gray-50">
                                    <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                                        <input type="checkbox" className="w-3 h-3 rounded-sm accent-indigo-600" name="Box0" />
                                    </div>
                                    <div className="w-32 px-2 py-3 sm:p-3">
                                        <p>{contact.name}</p>
                                    </div>
                                    <div className="w-32 px-2 py-3 sm:p-3">
                                        <p>{contact.email}</p>
                                    </div>
                                    <div className="flex-1 block px-2 py-5 truncate sm:p-3 sm:w-auto">{contact.message}</div>
                                    <button onClick={() => handleMessageDelete(contact._id)} className="p-2 font-semibold rounded-md bg-indigo-600 text-gray-50">
                                        Delete
                                    </button>
                                    <div className="hidden w-24 px-5 py-3 text-right sm:p-3 sm:block text-gray-600">
                                        <p>{date}</p>
                                    </div>
                                </div>
                            )
                        }))
                    }

                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.mongodburl);
    }
    const response = await UserContact.find({})
    const contacts = await JSON.parse(JSON.stringify(response))
    return {
        props: { contacts: contacts }
    }
}

export default Chat