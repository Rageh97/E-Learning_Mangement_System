import React from 'react'
import { Outlet } from 'react-router';
import Header from './header/index';
import Footer from './footer/index';

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout