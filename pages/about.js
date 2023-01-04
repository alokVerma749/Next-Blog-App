import Head from 'next/head'
import Image from 'next/Image'

const about = () => {
    return (
        <>
            <Head>
                <title>Alok Verma</title>
            </Head>
            <section className="bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Hello, Myself
                            <span className="dark:text-indigo-400"> Alok </span>Verma
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">As a full-stack JavaScript developer, I have a diverse range of skills and experience in creating custom web-based solutions. My expertise includes both front-end development using technologies such as HTML, CSS, and JavaScript, as well as back-end development using languages such as Node.js and Express. I am able to deliver complete projects from start to finish,
                            <br className="hidden md:inline lg:hidden" /> including everything from design and development to testing and deployment. With a focus on delivering high-quality, reliable solutions that meet the unique needs of my clients, I am confident in my ability to help bring your vision to life.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-indigo-400 dark:text-gray-900">Hire Me</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Download CV</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <Image src="https://mambaui.com/assets/svg/Business_SVG.svg"
                            alt="Hero image"
                            width={1000}
                            height={1000}
                            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default about