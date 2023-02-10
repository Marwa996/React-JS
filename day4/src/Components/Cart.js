/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function cart() {
    const dispatch = useDispatch();

    const cart = useSelector(state=>state.cartReducer.cart);

    const removeFromCart=(item)=>{
        dispatch(removeFromCart(item));
    }

  return (
    <div>
      {cart.map((item,index)=><div key={index} className='container'>
        <div className='row'>
        <div className="card border bg-light border-light col-3"  style={{width: "18rem",height: "40rem"}}>
        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.overview}</p>
            {/* <button className="btn btn-success">View Movie</button> */}
            <button className='btn btn-warning' onClick={()=>removeFromCart(item)}>Remove From Cart</button>
        </div>
        </div>
        </div>
      </div>)}
    </div>
  )
}

export default cart
