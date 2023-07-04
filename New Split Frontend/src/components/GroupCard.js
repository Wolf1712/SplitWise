import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

const GroupCard = ({id,name}) => {
const ondelete = async (e) =>{

  alert(`Are You Sure u Wante to Delete the Product ${name}`)
  window.location.reload();
  try {
  

    await axios({
      url: `http://localhost:9092/group/delete/${id}`,
      method : "DELETE"
    });

    await axios({
      url: `http://localhost:9091/display/delete/${id}`,
      method : "DELETE"
    });

    await axios({
      url: `http://localhost:9094/user/delete/${id}`,
      method : "DELETE"
    });
  } catch (error) {
   console.log(error);
  }  


}

  return (
    <div>
 
    <div className="card"  style={{width : "18rem"}} >
   <div className="card-body">
     <h5 className="card-title">{name}</h5>
     <Link to={`/group/${id}`}>
     <a class="card-link">View Group</a>
     </Link>
     
   </div>
   <button onClick={ondelete} type="button" class="btn btn-outline-danger">Delete Group</button>
 </div>
    </div>
  )
}

export default GroupCard