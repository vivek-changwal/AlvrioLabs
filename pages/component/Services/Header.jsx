import Image from 'next/image'
import React from 'react'

const Header = (props) => {
  return (
    <div>
      <div className="bg-white border-b-2 border-gray-color" >
        <div className="justify-self-center grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className=" lg:col-span-12">
            <h2 className='text-5xl tracking-tight leading-none md:text-5xl xl:text-5xl sm:items-center mb-16 mt-8'>{props.heading}</h2>
            <p className='text-lg justify-center mt-3 '>{props.contents}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header