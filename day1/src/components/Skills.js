import React from 'react'
function Skills() {
  return(
    <div>
        <div className='bg-success text-center text-white'><h1>SKILLS</h1></div>
       
       <div className='row mt-2'>
        <p className='col-3'>photoshop</p>
              <div className="progress col-8">
            <div className="progress-bar bg-success" role="progressbar" style={{width:100}}></div>
        </div>
        </div>

        <div className='row mt-2'>
        <p className='col-3'>After Effects</p>
              <div className="progress col-8">
            <div className="progress-bar bg-success" role="progressbar" style={{width:65}}></div>
        </div>
        </div>

        <div className='row mt-2'>
        <p className='col-3'>computer</p>
              <div className="progress col-8">
            <div className="progress-bar bg-success" role="progressbar" style={{width:75}}></div>
        </div>
        </div>

        <div className='row mt-2'>
        <p className='col-3'>illustrator</p>
              <div className="progress col-8">
            <div className="progress-bar bg-success" role="progressbar" style={{width:65}}></div>
        </div>
        </div>

        <div className='row mt-2'>
        <p className='col-3'>dreamweaver</p>
              <div className="progress col-8">
            <div className="progress-bar bg-success" role="progressbar" style={{width:55}}></div>
        </div>
        </div>
      

        {/* <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{width:65}}></div>
        </div>
        <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{width:75}}></div>
        </div>
        <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{width:45}}></div>
        </div>
        <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{width:55}}></div>
        </div> */}
    </div>

  )
}

export default Skills
