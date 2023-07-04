import React, { useState ,useRef, useEffect } from 'react'
import './Addexpense.css'
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

// import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import UserCardDisp from './UserCardDisp';
import Navbar from '../../Navbar';
import ExpenseView from './ExpenseView';


const Addexpenses = () => {


  let id=useParams();
  let mid=id.id;
  const [userdata, setuserdata] = useState([]);
  const [displaydata, setdisplaydata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const displaydata = await axios(
        `http://localhost:9091/display/${mid}/display`,
      );
      // console.log(result.data);
      setdisplaydata(displaydata.data);
    };
    fetchData();
  }, []);
  // console.log(displaydata);


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


  // console.log(userdata);
  const [selectedOption, setSelectedOption] = useState();

  // const [Description, setDescription] = useState(second)
  const [Description, setDescription] = useState({name : ""})
  const [price, setprice] = useState({amount : ""})
  const closeref=useRef(null)

  const onChange=(e)=>{
    setDescription({...Description,[e.target.name]: e.target.value})
  }
  const onChange1=(e)=>{
    setprice({...price,[e.target.name]: e.target.value})
  }
  // console.log(selectedOption);
  const [newdata, setnewdata] = useState([0]);


  useEffect(() => {
  
    const filtered = userdata.filter(obj => {

      return obj.id == selectedOption;
    });
   setnewdata(filtered)
  }, [selectedOption]);


  const Onadd=async (e)=>{
    closeref.current.click();
    let x=price.amount
    const num = parseInt(x);
    console.log(Number.isInteger(num));
    if(!Number.isInteger(num)){
      alert("enter the valid amount !!!");
      window.location.reload();
    } 
    else if(price.amount<=0){
      alert(`Please enter the price value of ${newdata[0].name} greater than zero`);
      window.location.reload();
    }
    else if(Description.name===""){
      alert("Enter the Description");
      window.location.reload();
    }
    else{
      console.log(price.amount);
          alert(`Expense of ${newdata[0].name} is Added Successfully.`)
    const response = await fetch("http://localhost:9094/user/update",{
      method : 'PUT',
      headers :{
       'Content-Type': 'application/json'
      },
     body: JSON.stringify({
      id : selectedOption,
      
      groupid : newdata[0].groupid,
      name : newdata[0].name,
      spent : newdata[0].spent+parseInt(price.amount)
    })
    })
    const response1 = await fetch("http://localhost:9091/display/adddisplay",{
      method : 'POST',
      headers :{
       'Content-Type': 'application/json'
      },
     body: JSON.stringify({
  
      
      groupid : newdata[0].groupid,
      name : newdata[0].name,
      description : Description.name,
      spent : parseInt(price.amount),
      userid : newdata[0].id
    })
    })
  window.location.reload();

  }

  
  }
  return (
    <>
     <Navbar/>
     <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Expense</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button ref={closeref} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Enter Description :</label>
            <input onChange={onChange} id="name" name="name" value={Description.name} type="text" class="form-control"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Enter Amount :</label>
            <input onChange={onChange1} id="amount" name="amount" value={price.amount} type="text" class="form-control"/>
          </div>
          
        </form>
      </div>
      <div class="modal-footer">
        <button  ref={closeref} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  onClick={Onadd}  type="button" class="btn btn-primary">Continue</button>
      </div>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
   
  <option value="" disabled>Select an User</option>
  <option  value="">Select Users Below</option>
  {userdata.map((userdata) => (
    <option key={userdata.id} value={userdata.id}>{userdata.name}</option>
  ))}
</select>

   
    </div>
  </div>
</div>


    <div 
    style={{
      backgroundColor : 'grey'
     
    }}>

    <div id="gradient"></div>
    <div id="card">
     
      <h2>Expenses</h2>
     
      {
            displaydata.map((displaydata) => (
              
          
          <ExpenseView
          id ={displaydata.id}
          desc = {displaydata.description}
          groupid ={displaydata.groupid}
          name ={displaydata.name}
          spent={displaydata.spent}
          userid={displaydata.userid}
          
          
          />
        
            
  )) }
         
    </div>
    </div>
    <Link to={`/group/user/${mid}`}>
    <button  type="button" class="btn btn-primary">Split Up</button>
    </Link>

    <div>
  {
userdata.map((userdata) => (
            <UserCardDisp
            name={userdata.name}
            spent={userdata.spent}

          />
))}
          </div>
    </>
  )
}

export default Addexpenses