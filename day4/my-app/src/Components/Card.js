import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Card(data) {
    let [item,setItem]=useState({})
    useEffect(()=>{
        setItem(data.data);
        console.log(item.id);
    },[])
    
    const nav=useNavigate();

    function go(){
        nav('/item',{state:data});
    }
    return (
    <div className=''>
        <div className="card border bg-light border-light"  style={{width: "18rem",height: "40rem"}}>
        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.overview}</p>
            <p className="card-text">{data.release_date}</p>
            <button className="btn btn-success" onClick={go}>View Movie</button>
        </div>
        </div>
    </div>
  )
}

export default Card
