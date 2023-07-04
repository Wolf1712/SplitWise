import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios";
import {  useParams } from 'react-router-dom';
import './Splitup.css'
import Navbar from '../../Navbar';

const Splitup = () => {

  const [userdata, setuserdata] = useState([]);
  let id=useParams();
  let mid=id.id;
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
  console.log(userdata);

  const items=[];
  const x=userdata.length;
  // console.log(x);
  for (let index = 0; index < userdata.length-1; index++) {
      for(let j=index+1;j<userdata.length;j++){
          let sum=userdata[index].spent/x-userdata[j].spent/x;
          if(sum>0){
              items.push(<li>{userdata[index].name} has to get amount of Rs {sum} from {userdata[j].name}</li>)
          }
          else{
              items.push(<li>{userdata[j].name} has to get amount of Rs {-1*sum} from {userdata[index].name}</li>)
          }
      }
  }
  
   

  return (
    <>
    <Navbar/>
    <h4>Expenses After Split Up :</h4>
    {items.map((item, index) => (
    <div class="card">
  <ul class="word-list">
    <li class="word-list-item">
      <span class="bullet"></span>
      <div key={index}>
      {item}
    </div>
    </li>

  </ul>
</div>
  ))}
</>
  )
}

export default Splitup