import React from 'react'
import image from '../../src/girl.png'
function ProfileSection() {
  return(
    <div>
      <img src={image} alt='profile' className='img-fluid'></img>
      <h1 className='text-center' style={{fontSize:80}}>HELLO</h1>
    </div>
  )
}

export default ProfileSection
