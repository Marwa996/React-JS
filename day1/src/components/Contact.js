import React from 'react'
import image1 from '../home.png'
import image2 from '../telephone.png'
import image3 from '../earth.png'

function Contact() {
  return(
    <div>
        <div className='bg-success text-center text-white'><h1>CONTACT</h1></div>
        
            <div className='row mt-3'>
                <div className='col-2' >
                    <img src={image1} style={{width:30}} alt='home' className='img-fluid'></img>
                </div>
                <div className='col-10'>
                    <p>777 lorem lorem New york</p>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-2 mt-2' >
                    <img src={image2} style={{width:30}} alt='home' className='img-fluid'></img>
                </div>
                <div className='col-10'>
                    <p className='lh-1'>0111222225555</p>
                    <p className='lh-1'>0111222225555</p>
                </div>
            </div>

            <div className='row mt-1'>
                <div className='col-2 mt-3' >
                    <img src={image3} style={{width:30}} alt='home' className='img-fluid'></img>
                </div>
                <div className='col-10'>
                    <p lassName='lh-1'>WWW.dsfdsfdsfdsf.sdfsdf</p>
                    <p lassName='lh-1'>WWW.dsfdsfdsfdsf.sdfsdf</p>
                </div>
            </div>
        </div>

  )
}

export default Contact
