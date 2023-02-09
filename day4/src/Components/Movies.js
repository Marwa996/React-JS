import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';

function Movies() {

    let [movies,setMovies]=useState([]);
    
    useEffect(()=>{
       axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c').then(res=>{
            setMovies(res.data.results)
            // console.log(movies)       
       })
    },[])

  return (
    <div className='bg-dark'>
        <div className='container row justify-content-center'>
        {movies.map((item,index)=><div className='col-3 m-3 text-center'><Card key={index} data={item}></Card></div>)}
        {/* {movies.map((item,index)=>console.log(item.title))} */}
    </div>
    </div>

  )
}

export default Movies
