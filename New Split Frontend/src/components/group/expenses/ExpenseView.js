import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ExpenseView = ({id,desc,groupid,name,spent,userid}) => {
    
const [userdata, setuserdata] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          const userdata = await axios(
            `http://localhost:9094/user/getusers/${userid}`,
          );

          setuserdata(userdata.data);
        };
        fetchData();
      }, []);
    
    const onpress = async (e)=>{

//   console.log(userdata.spent);

        const response = await fetch("http://localhost:9094/user/update",{
            method : 'PUT',
            headers :{
             'Content-Type': 'application/json'
            },
           body: JSON.stringify({
            id : userdata.id,
            
            groupid : userdata.groupid,
            name : userdata.name,
            spent : userdata.spent-spent
          })
          })

          try {
   window.location.reload();

            await axios({
              url: `http://localhost:9091/display/deletedisplay/${id}`,
              method : "DELETE"
            });

          } catch (error) {
           console.log(error);
          }  
      }

  return (
    <div class="card">
    <ul class="word-list">
      <li class="word-list-item">
        <span class="bullet"></span>
        <div key={id}>
        {desc}
      </div>
      <button onClick={onpress} style={{marginLeft : '500px'}} type="button" class="btn btn-outline-danger">Delete</button>
      </li>
      
    </ul>
   
  </div>
  )
}

export default ExpenseView