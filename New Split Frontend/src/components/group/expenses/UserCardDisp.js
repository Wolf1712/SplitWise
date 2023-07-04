import React from 'react'

const UserCardDisp = ({name,spent}) => {
  return (
    <div>
 
    <div className="card"  style={{width : "18rem"}} >
   <div className="card-body">
     <h5 className="card-title">{name}</h5>
     <b>{spent}</b>
   </div>
 </div>
    </div>
  )
}

export default UserCardDisp