import React from 'react'
import { Link } from 'react-router-dom'

function HomeGrid({Img,Heading,Summery,URL}) {
  return (
    <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
    <Link to="/post">
      <div className="flex-shrink-0">
        <img className="object-cover w-full h-48 rounded-lg" src={"https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg&ga=GA1.1.2078512339.1699188763&semt=ais"} alt=""/>
      </div>
    </Link>
    <div className="flex flex-col justify-between flex-1">
    <Link to="/post"></Link>
      <div className="flex-1">
      <Link to="/post">
          <div className="flex pt-6 space-x-1 text-sm text-gray-500">
            <time datetime="2020-03-10"> Mar 10, 2020 </time>
            <span aria-hidden="true"> · </span>
            <span> 4 min read </span>
          </div>
        </Link>
        
        <a href="#" className="block mt-2 space-y-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Typography on app.</h3>
          <p className="text-lg font-normal text-gray-500">Filling text so you can see how it looks like with text. Did I said text?</p>
        </a>
      </div>
    </div>
  </div>
  )
}

export default HomeGrid