import React, { useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
import Navbar from '../Navbar';
const GroupDisp = () => {
  const closeref=useRef(null)
  let id=useParams();
let mid=id.id;
  const [user, setuser] = useState({name : ""})
  const [data, setData] = useState([]);
  const [userdata, setuserdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:9092/group/${mid}`,
      );
      // console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const userdata = await axios(
        `http://localhost:9094/user/${mid}/users`,
      );
      // console.log(result.data);
      setuserdata(userdata.data);
    };
    fetchData();
  }, []);

  const onadd =async (e)=>{
    // e.preventDefault();
    // console.log("hi"); 
    // const data=user;
    closeref.current.click();
    window.location.reload();
    if(user.name===""){
      alert("Please enter a Valid Username")
    }
    else{
    try {
      window.location.reload();
      const response = await fetch("http://localhost:9094/user/add",{
        method : 'POST',
        headers :{
         'Content-Type': 'application/json'
        },
       body: JSON.stringify({
         groupid : mid,
         name : user.name})

   })
      
    } catch (error) {
      console.log(error);
    }
   

 
  }
    
  }
  const onChange=(e)=>{
    setuser({...user,[e.target.name]: e.target.value})
  }
  return (
    <>
    <Navbar/>
    <div
    style={{
      display:'flex',
      justifyContent : 'space-between'
    }}
    >
      <div
      style={{
        display : 'flex',
        alignItems:'center',
        width:'70%',
        margin : '225px 0px 0px 0px',
        flexDirection:'column'
      }}
      >
      <h1>{data.name}</h1>
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add User</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button ref={closeref} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Adduser :</label>
            <input onChange={onChange} id="name" name="name" value={user.adduser} type="text" class="form-control"/>
          </div>
          
        </form>
      </div>
      <div class="modal-footer">
        <button  ref={closeref} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  onClick={onadd}  type="button" class="btn btn-primary">Continue</button>
      </div>
    </div>
  </div>
</div>
<div>
  <Link to={`/groupexpense/${mid}`}>
      <Button >Add & View Expeneses</Button>
      </Link>
    </div>
{/* <button href="/posts" type="button" class="btn btn-outline-primary">Add & View Expeneses</button> */}

      </div>
      <div
      style={{
        display : 'flex',
        alignItems:'center',
        width:'30%',
        border : '2px',
        flexDirection : 'column',
        boxShadow: '10px 10px 5px 12px lightblue',
        height:'784px'
      }}
      >
        <h3
        style={{
          padding:'16px 0px'
        }}
        >{`Users in ${data.name}`}</h3>
        <div
        style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }}
        >
          {
            userdata.map((userdata) => (
              <div
        style={{
          display:'flex',
          justifyContent : 'space-between',
          width : '108px',
          margin : '16px 0px'
        }}
        >
          
        <Avatar src="/broken-image.jpg"  sx={{ width: 30, height: 30 }}/>
        <h5>{userdata.name}</h5>
        </div>
            
  )) }

  

      
        <div
        style={{
          display:'flex',
          justifyContent : 'space-between',
          width : '108px',
          margin : '16px 0px'
        }}
        >
          
          
 
        </div>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default GroupDisp