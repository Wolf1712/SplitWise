import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GroupDisp from './components/group/GroupDisp';
import Addexpenses from './components/group/expenses/Addexpenses';
import Splitup from './components/group/expenses/Splitup';
import Login from './components/loginandReg/Login';
import Protected from './components/Protected';
import Signup from './components/loginandReg/Signup';
function App() {
  return (
    <BrowserRouter>
   
      <Routes>
     
      <Route path="/" element={<Protected Component={Home} />} />
      <Route path="group/:id" element={<Protected Component={GroupDisp} />} />
      <Route path="groupexpense/:id" element={<Protected Component={Addexpenses} />} />
      <Route path="group/user/:id" element={<Protected Component={Splitup} />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
