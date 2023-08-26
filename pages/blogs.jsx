import React, { useEffect, useState } from 'react'
import Blogs from './component/Blog'
import Footer from './component/Footer'
import Nav from './component/Nav'

const Blog = () => {
  return (
    <div>
      <Nav />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Blog