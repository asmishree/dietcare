import React from 'react'
import { Link } from 'react-router-dom'

function HomeGrid({Img,Heading,Summery,URL,DateTime}) {

const options = { month: "short", day: "numeric", year: "numeric" };
const formattedDate = new Date(DateTime).toLocaleString("en-US", options);
  return (
    <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
    <Link to={`/post/${URL}`}>
      <div className="flex-shrink-0">
        <img className="object-cover w-full h-48 rounded-lg" src={Img} alt=""/>
      </div>
    </Link>
    <div className="flex flex-col justify-between flex-1">
    <Link to={`/post/${URL}`}></Link>
      <div className="flex-1">
      <Link to={`/post/${URL}`}>
          <div className="flex pt-6 space-x-1 text-sm text-gray-500">
            <time datetime="2020-03-10">{formattedDate}</time>
            <span aria-hidden="true"> · </span>
            <span> 4 min read </span>
          </div>
        </Link>
        
        <Link to={`/post/${URL}`} className="block mt-2 space-y-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">{Heading}</h3>
          <p className="text-lg font-normal text-gray-500">{Summery}</p>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default HomeGrid