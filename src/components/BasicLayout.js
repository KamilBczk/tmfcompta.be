import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import ChatWidget from './ChatWidget'

function BasicLayout() {
  return (
    <>
      <Header/>
      <ChatWidget/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default BasicLayout