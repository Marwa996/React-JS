import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const nav=useNavigate();
    function save(){
        localStorage.setItem('flag',true);
        nav('/movies')
    }
  return (
    <div className=''>
      <button className='btn btn-success' onClick={save}>Login</button>
    </div>
  )
}

export default Login
