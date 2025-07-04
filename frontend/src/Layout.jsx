import React from 'react'
import Header from './Component/Header/Header.jsx'
import {Outlet} from 'react-router-dom'
import UserContextProvider from './Context/UseContextProvider.jsx'
import Footer from './Component/Footer/Footer.jsx'

export default function Layout() {
  return (
    <UserContextProvider>
        <Header/>
        <Outlet/>
        <Footer/>
    </UserContextProvider>
  )
}
