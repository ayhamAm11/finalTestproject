import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

function Main() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Main