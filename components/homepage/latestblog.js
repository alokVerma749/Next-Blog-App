{/* Latest Blog */}

import React from 'react'



const latestblog = () => {
  return (
<section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
<div className="container p-6 mx-auto space-y-8">
  <div className="space-y-2 text-center">
    <h2 className="text-3xl font-bold">Latest Blogs</h2>
    <p className="font-serif text-sm dark:text-gray-400">Have a look on my latest published blogs.</p>
  </div>
  <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
    <article className="flex flex-col dark:bg-gray-900">
      <a
        href="#"
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
      >
        <span
          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div className="justify-between sm:flex">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Building a SaaS product as a software developer
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
          </div>

          <div className="ml-3 hidden flex-shrink-0 sm:block">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4 sm:pr-8">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
            provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl className="mt-6 flex">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Published</dt>
            <dd className="text-xs text-gray-500">31st June, 2021</dd>
          </div>

          <div className="ml-3 flex flex-col-reverse sm:ml-6">
            <dt className="text-sm font-medium text-gray-600">Reading time</dt>
            <dd className="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>

    </article>
    <article className="flex flex-col dark:bg-gray-900">
      <a
        href="#"
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
      >
        <span
          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div className="justify-between sm:flex">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Building a SaaS product as a software developer
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
          </div>

          <div className="ml-3 hidden flex-shrink-0 sm:block">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4 sm:pr-8">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
            provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl className="mt-6 flex">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Published</dt>
            <dd className="text-xs text-gray-500">31st June, 2021</dd>
          </div>

          <div className="ml-3 flex flex-col-reverse sm:ml-6">
            <dt className="text-sm font-medium text-gray-600">Reading time</dt>
            <dd className="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>
    </article>
    <article className="flex flex-col dark:bg-gray-900">
      <a
        href="#"
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
      >
        <span
          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div className="justify-between sm:flex">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Building a SaaS product as a software developer
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
          </div>

          <div className="ml-3 hidden flex-shrink-0 sm:block">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4 sm:pr-8">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
            provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl className="mt-6 flex">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Published</dt>
            <dd className="text-xs text-gray-500">31st June, 2021</dd>
          </div>

          <div className="ml-3 flex flex-col-reverse sm:ml-6">
            <dt className="text-sm font-medium text-gray-600">Reading time</dt>
            <dd className="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>
    </article>
    <article className="flex flex-col dark:bg-gray-900">
      <a
        href="#"
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
      >
        <span
          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div className="justify-between sm:flex">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Building a SaaS product as a software developer
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
          </div>

          <div className="ml-3 hidden flex-shrink-0 sm:block">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4 sm:pr-8">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
            provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl className="mt-6 flex">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Published</dt>
            <dd className="text-xs text-gray-500">31st June, 2021</dd>
          </div>

          <div className="ml-3 flex flex-col-reverse sm:ml-6">
            <dt className="text-sm font-medium text-gray-600">Reading time</dt>
            <dd className="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>

    </article>
  </div>
</div>
</section>
  )
}

export default latestblog