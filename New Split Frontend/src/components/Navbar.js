import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const history = useNavigate();
  const onpress = (e)=>{
    localStorage.setItem('userLogin',"false");
     history('/login');

  }
  return (
    <nav style={{backgroundColor : '#c3bfff'}} class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand">Split Wise</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
      </ul>
    </div>
  </div>
  <button onClick={onpress} type="button" class="btn btn-outline-danger">Logout</button>
</nav>
  )
}

export default Navbar