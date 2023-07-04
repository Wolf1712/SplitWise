import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { Link } from 'react-router-dom';
import avatar from '../img/avatar.svg';
// import avatar from '.../'
import bg from '../img/bg.svg';
import wave from '../img/wave.png';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
// axios
const Login = () => {
  
    const [credentials, setCredentials] = useState({username: "", password: ""}) 
       const history = useNavigate();
    
      const [data, setdata] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
          
          await axios.post("http://localhost:9093/user/loginattempt",{
            username : credentials.username,
            password : credentials.password
          }).then(Response => {
            // console.log(Response.data);
            setdata(Response.data);
           

            // history.push('/')
          })
          localStorage.setItem('userLogin',"true");
          alert("Login Successfull")
          history("/");
          // console.log("login succcesfull");
        } catch (error) {
            alert("Login UnSuccessfull");
          console.log(error);
        }

    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


    return (
        <div>
           <img className="wave" src={wave} alt={wave}/>
	<div className="godgrace">
		<div className="img" >
			<img src={bg} alt={bg}/>
		</div>
		<div className="login-content">
			<form action="index.html">
				<img src={avatar} alt={avatar}/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		{/* <h5></h5> */}
           		   		<input type="text" placeholder="Username" name="username" value={credentials.username} onChange={onChange} className="input" />
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	{/* <h5></h5> */}
           		    	<input type="password" placeholder="Password" name="password"value={credentials.password} onChange={onChange} className="input" />
            	   </div>
            	</div>
            	{/* <a href="#">Forgot Password?</a> */}
            	<input type="submit" className="button1"  onClick={handleSubmit}  value="Login"/>
                <Link to="/signup">
                
                <input type="submit" className="button"   value="Register"/>
            </Link>
            </form>
        </div>
    </div>
    
        </div>
    )
}

export default Login
