import React,{useState} from 'react'
import image1 from '../head.png'
import image2 from '../tail.png' 

function CoinFlip() {
    let [total,setTotal]=useState(0);
    let [heads,setHeads]=useState(0);
    let [tails,setTails]=useState(0);
    let [img,setImg]=useState({
        image1:image1,
        image2:image2
    })
    let flag=0;
    function flip(){
        flag=Math.floor(Math.random()*10)%2;
        console.log(flag)
        setTotal(++total)
        if(flag===0){
            setImg({image1:image1})
            setHeads(++heads)
        }else if(flag===1){
            setImg({image1:image2})
            setTails(++tails)
        }
    }

  return (
    <div>
        <div className='mt-5'>
            <img src={img.image1} alt='head'></img>
        </div>
 
      <button className='btn btn-success my-5' onClick={flip} style={{fontSize:30}}>Flip the Coin</button>
      <h1 className='mt-5'>Total Flips:{total}, Heads Flips:{heads}, Tails Flips:{tails} </h1>
    </div>
  )
}

export default CoinFlip
