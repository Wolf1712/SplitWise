import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import avatar from '../img/avatar.svg';
// import bg from '../img/bg.svg';
// import wave from '../img/wave.png';
const Signup = () => {
  const [credentials, setCredentials] = useState({name: "",username: "", password: ""})
  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
// useHis

const history = useNavigate();
const [data, setdata] = useState();
const onSubmit = async (e) => {
    e.preventDefault();
   console.log(credentials);
    try {
      
      await axios.post("http://localhost:9093/user/adduser",{
        name     : credentials.name,
        username : credentials.username,
        password : credentials.password
      }).then(Response => {
        // console.log(Response.data);
        setdata(Response.data);
        alert("Succesfully User Created");

        // history('/login')
      })
 
      
      history("/login");
      // console.log("login succcesfull");
    } catch (error) {
        alert("Username Already Exists");
      console.log(error);
    }
}
  return (
    <div className="Signup" >




            <section className="vh-100" style={{ backgroundColor: 'rgb(141, 188, 208)' }}>

                <div className="container h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-lg-12 col-xl-11">

                            <div className="card text-black" style={{ borderRadius: '25px' }}>

                                <div className="card-body p-md-5">

                                    <div className="row justify-content-center">

                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">




                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>




                                            <form className="mx-1 mx-md-4" >




                                                <div className="d-flex flex-row align-items-center mb-4">

                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                                                    <div className="form-outline flex-fill mb-0">

                                                        <input type="text" className="form-control"

                                                            placeholder="name"

                                                            name="name"

                                                            value={credentials.name}

                                                            onChange={onChange}

                                                        // onChange={(e) => setUsername(e.target.value)}

                                                        />

                                                        {/* <br/> */}

                                                        {/* <p style={{ color: 'red', fontSize: 15 }}>{credentials.name}</p> */}

                                                    </div>

                                                </div>





                                                <div className="d-flex flex-row align-items-center mb-4">

                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

                                                    <div className="form-outline flex-fill mb-0">

                                                        <input type="username"

                                                            className="form-control"

                                                            placeholder="username"

                                                            name="username"

                                                            value={credentials.username}

                                                            onChange={onChange}

                                                        // onChange={e => setEmail(e.target.value)}

                                                        />

                                                        {/* <br/> */}

                                                        {/* <p style={{ color: 'red', fontSize: 15 }}>{credentials.username}</p> */}

                                                    </div>

                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">

                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>

                                                    <div className="form-outline flex-fill mb-0">

                                                        <input type="password" className="form-control"

                                                            placeholder="Password"

                                                            name="password"

                                                            value={credentials.password}

                                                            onChange={onChange}

                                                        // onChange={e => setPassword(e.target.value)}

                                                        /><br/>

                                                        {/* <p style={{ color: 'red', fontSize: 15 }}>{credentials.password}</p> */}

                                                    </div>

                                                </div>




                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">

                                                    <button type="submit" className="btn btn-primary btn-lg" onClick={onSubmit}

                                                    >Register</button>

                                                </div>




                                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <a href="/login"

                                                    style={{ color: '#393f81' }}>Login here</a></p>




                                            </form >




                                        </div >

                                        {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">




                                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" className="img-fluid" alt="..." />

                                           

                                        </div> */}

                                    </div >

                                </div >

                            </div >

                        </div >

                    </div >

                </div >

            </section >

        </div >
  )
}

export default Signup