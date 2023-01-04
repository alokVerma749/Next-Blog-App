import React from 'react'
import Image from 'next/Image'
import Link from 'next/link'
import { BsFillCartCheckFill } from 'react-icons/bs';


const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src={'/logo.png'}
                        alt="Logo of the company"
                        width={150}
                        height={250}
                        className='' />
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={'/'} className="mr-5 hover:text-gray-900" >HOME</Link>
                    <Link href={'/about'} className="mr-5 hover:text-gray-900" >ABOUT ME</Link>
                    <Link href={'/services'} className="mr-5 hover:text-gray-900" >SERVICES</Link>
                    <Link href={'/projects'} className="mr-5 hover:text-gray-900" >PROJECTS</Link>
                    <Link href={'/blogs'} className="mr-5 hover:text-gray-900" >BLOGS</Link>
                    <Link href={'/contact'} className="mr-5 hover:text-gray-900" >CONTACT ME</Link>
                </nav>
                <button className="inline-flex items-center bg-[#004aad] text-white hover:text-[#004aad] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Cart
                    <BsFillCartCheckFill className='ml-2' />
                </button>
            </div>
        </header>
    )
}

export default Navbar