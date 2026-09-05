import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Outlet} from "react-router-dom"
import Login from '../pages/Login'
import Signup from '../pages/Signup'

function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}

export default AdminLayout