
  {/* Hero section */}

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
  <section className="bg-gray-900 text-white">
    <div
      className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Crafting digital solutions
          <span className="sm:block"> with code and creativity. </span>
          </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
          Welcome to my web development services! I strive to meet your unique needs and exceed your expectations with top-quality work. Contact me today to see how I can help your online presence succeed.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/get-started">
            Get Started
          </a>

        <Link className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"href="/about">
            Learn More
        </Link>
        </div>
      </div>
    </div>
  </section>
    )
  }
export default Hero
