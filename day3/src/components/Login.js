import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';

function Login() {
  let [isFocus, setIsFocus] = useState(false);
  let [isBlur, setIsBlur] = useState(false);
  let [data,setData]=useState({})

  let formik=useFormik({
    initialValues:
        {
          fullName:'',
            email:'',
            password:''
        },
        validationSchema:yup.object({
          password:yup.string()
      }),
    onSubmit:(values)=>{
      setData(values)
        console.log(values);
        console.log(data);
    }
  })

  function focused(){
    setIsFocus(true)
    // console.log(isFocus)
  }

  return (
    <div className='container'>
      <form className='my-5' onSubmit={formik.handleSubmit}>
        {/* name */}
      <div className="mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input type="text" className="form-control {isFocused}?:border-danger : " id="fullName" onClick={focused} onChange={formik.handleChange}/>
  </div>
  {/* email */}
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={formik.handleChange}/>
  </div>
  {/* password */}
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={formik.handleChange}/>
    <div className="form-text" style={{color:'red'}}>{formik.errors.password}</div>
  </div>
  {/* city */}
  <div className="mb-3">
  <label htmlFor="city" className='me-2'>Choose a city:</label>
  <select name="city" id="city">
    <option value="volvo">Cairo</option>
    <option value="saab">Alex</option>
    <option value="opel">Qena</option>
    <option value="audi">Aswan</option>
  </select>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  {/* {data.map((item)=><p>{item.password}</p>)} */}
    
    
    </div>

  )
}

export default Login
