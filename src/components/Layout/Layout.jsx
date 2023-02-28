import React from 'react'
import "../Layout/layout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routers from "../../routers/Routers"
const Layout = () => {
  return (
    <>
    <div className='overflow'>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Layout