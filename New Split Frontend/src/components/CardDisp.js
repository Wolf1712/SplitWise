import React, {useEffect, useRef, useState } from 'react'
// import Button from '@mui/material/Button';
import axios from "axios";
import GroupCard from './GroupCard';


const CardDisp = () => {

const closeref=useRef(null)
const [data, setData] = useState([]);
useEffect(() => {
 
  const fetchData = async () => {
    const result = await axios(
      'http://localhost:9092/group/getgroups',
    );
    setData(result.data);
  };
  fetchData();
}, []);
// console.log(data);


  const [group, setgroup] = useState({name : ""})
  const onChange=(e)=>{
    console.log(group);
    setgroup({...group,[e.target.name]: e.target.value})
  }
const onadd=async (e)=>{
  closeref.current.click();
  if(group.name===""){
    alert("Please Enter The Group Name")
  }
  else{
  
  const response = await fetch("http://localhost:9092/group/addgroups",{
    method : 'POST',
    headers :{
     'Content-Type': 'application/json'
    },
   body: JSON.stringify({name : group.name})

})
window.location.reload();
// const m = await response.json();
// console.log(m);
  }
}
  return (
    <>
    <div class="card text-center">
    <div class="card-header">
        Groups Panel
    </div>
    </div>
    <div class="card-footer text-muted">
    </div>
    <div class="card-body"></div>
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Group</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button ref={closeref} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">AddGroup Name:</label>
            <input onChange={onChange} id="name" name="name" value={group.name} type="text" class="form-control"/>
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
<div></div>
<div>
  {
data.map((data) => (
            <GroupCard
            id={data.id}
            name={data.name}

          />
))}
          </div>
   
   </>
  )
}

export default CardDisp