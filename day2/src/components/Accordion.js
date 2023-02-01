import React,{useState} from 'react'
import './accordion.css'
function Accordion() {
    let [flag,setFlag]=useState(false);

    function accordion(){
        if(flag===true){
            setFlag(false);
        }else{
            setFlag(true);
        }
    }

  return (
    <div className='accordion'>
      <div className='bg-primary w-50'>
        <h1 className='bg-primary text-white py-1 section' onClick={accordion}>Section 1</h1>
        <div className='bg-light'>
            <p style={{display:flag ? "flex" : "none"}} className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
