import Image from 'next/Image'

const contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div div className="bg-[#004aad] grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100 text-white md:mb-24" >
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    {/*  eslint-disable-next-line react/no-unescaped-entities */}
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
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
                    <input id="name" type="text" required placeholder="Alok Verma" className="w-full p-3 rounded dark:bg-gray-800 text-black" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm text-white">Email</label>
                    <input id="email" type="email" placeholder='example@mail.com' required className="w-full p-3 rounded dark:bg-gray-800 text-black" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm text-white">Message</label>
                    <textarea id="message" rows="3" placeholder='Hi! Alok, I want to hire you for a freelance project....' required className="w-full p-3 rounded dark:bg-gray-800 text-black"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-indigo-400 border border-white text-white hover:text-[#004aad] hover:bg-white dark:text-gray-900">Send Message</button>
            </form>
        </div >
    )
}

export default contact