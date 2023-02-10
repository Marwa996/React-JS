import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
function Card(data) {

    let [item,setItem]=useState({});
    const nav=useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        setItem(data.data);
    },[])
    
    function go(){
        nav('/item',{state:data});
    }

    const handleAddToCart=(item)=>{
        dispatch(addToCart(item));
    }

    return (
    <div className=''>
        <div className="card border bg-light border-light"  style={{width: "18rem",height: "40rem"}}>
        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.overview}</p>
            <p className="card-text">{item.release_date}</p>
            <button className="btn btn-success" onClick={go}>View Movie</button>
            <button className='btn btn-warning' onClick={()=>handleAddToCart(item)}>Add To Cart</button>
        </div>
        </div>
    </div>
  )
}

export default Card
