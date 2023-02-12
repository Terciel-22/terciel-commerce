import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import axiosClient from '../axios-client';
import { useStateContext } from '../context/ContextProvider';

export default function AdminLayout() {

  const {user,token, setUser, setToken} = useStateContext();
  if(!token)
  {
    return <Navigate to="/login" />
  }
  
  useEffect(()=>{
    axiosClient.get("/user")
      .then(({data})=>{
        setUser(data);
      })
  },[])

  const logout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout")
      .then(()=>{
        setUser({});
        setToken(null);
      })
  }

  if(user.type !== "Admin")
  {
    if(user.type === "Seller")
    {
      return <Navigate to="/seller" />
    }
    if(user.type === "Customer")
    {
      return <Navigate to="/customer" />
    }
  } else 
  {
    return (
      <div>
        <nav>
          {user.name}
          <a href="" onClick={logout}>Logout</a>
        </nav>
        <Outlet />
      </div>
    )
  }
}
