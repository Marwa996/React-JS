import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Item() {
    
    const [item,setItem]=useState({});
    const location= useLocation();
    console.log(location.state.data);
    useEffect(()=>{
        setItem(location.state.data)
    },[])

  return (
    <div className='bg-dark'>
        <div className='container'>
            <div className="card text-center">
                <div className="card-header">
                    <h1>{item.title}</h1>
                </div>
                <div className="card-body">
                <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="card-img-top w-50" alt="..."/>
                    <h5 className="card-title mt-5">{item.title}</h5>
                    <p className="card-text">{item.overview}</p>
                    Language: <p className="card-text">{item.original_language}</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Item
