import React from 'react'
import Navbar from "../navbar/navbar"

const Layout = ( {children} ) => {
  return (
    <>
        <Navbar/>
        <div>{children}</div>
    </>
  )
}

export default Layout