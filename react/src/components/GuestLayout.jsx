import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

export default function GuestLayout() {

  const {user,token} = useStateContext();

  if(token)
  {
    if(user.type === "Admin")
    {
      return <Navigate to="/admin" />
    }
    if(user.type === "Seller")
    {
      return <Navigate to="/seller" />
    }
    if(user.type === "Customer")
    {
      return <Navigate to="/customer" />
    }
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Outlet />
    </div>
  )
}
