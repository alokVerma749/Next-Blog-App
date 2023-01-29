import React from 'react'

const projects = () => {
    return (
        <section>
            <div className="bg-indigo-600">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">Provident blanditiis cum exercitationem</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900">Get started</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50">Learn more</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-100 text-gray-800">
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-600 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Architecto</span>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-600 text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Corrupti</span>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-600 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>Excepturi</span>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-600 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                    <span>Consectetur</span>
                </a>
            </div>
            <div className="container p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 grid-flow-row mx-auto">

                <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold text-indigo-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            <button className='border border-blue-600 p-2 rounded-xl font-bold text-blue-600 hover:text-blue-400 duration-200'>Preview</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold text-indigo-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            <button className='border border-blue-600 p-2 rounded-xl font-bold text-blue-600 hover:text-blue-400 duration-200'>Preview</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold text-indigo-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            <button className='border border-blue-600 p-2 rounded-xl font-bold text-blue-600 hover:text-blue-400 duration-200'>Preview</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold text-indigo-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            <button className='border border-blue-600 p-2 rounded-xl font-bold text-blue-600 hover:text-blue-400 duration-200'>Preview</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold text-indigo-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            <button className='border border-blue-600 p-2 rounded-xl font-bold text-blue-600 hover:text-blue-400 duration-200'>Preview</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold text-indigo-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            <button className='border border-blue-600 p-2 rounded-xl font-bold text-blue-600 hover:text-blue-400 duration-200'>Preview</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="my-8 bg-gray-100 text-gray-800">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <h1 className="p-4 text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-indigo-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-indigo-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-600 text-gray-50">
                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-indigo-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-indigo-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-600 text-gray-50">
                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-indigo-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-indigo-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-600 text-gray-50">
                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-indigo-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-indigo-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-600 text-gray-50">
                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                            <p className="text-sm uppercase">Aliquam illum</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ's */}
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
                            <div className="px-4 pb-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
                            <div className="px-4 pb-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                                <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Contact Us */}
            <section className="p-6 text-gray-800">
                <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 ng-untouched ng-pristine ng-valid">
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                    <div>
                        <label for="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-indigo-600 bg-gray-100" />
                    </div>
                    <div>
                        <label for="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-indigo-600 bg-gray-100" />
                    </div>
                    <div>
                        <label for="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-indigo-600 bg-gray-100"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-indigo-600 focus:ring-indigo-600 hover:ring-indigo-600 text-gray-50">Send</button>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default projects