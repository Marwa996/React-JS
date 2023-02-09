import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from './Login';

function Auth() {
    const flag=localStorage.getItem("flag");
  return (
    <div>
      {flag?<Outlet></Outlet>:<Navigate to={'/login'}></Navigate>}
    </div>
  )
}

export default Auth
