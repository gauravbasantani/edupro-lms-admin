import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/Login';
import Header from './components/Header';
import Dashboard from "./components/Dashboard";

import Admin from "./components/Admin";
import Trainers from "./components/Trainers/Trainers";

function App() {
  let adminLoggedIn = false;
 
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="admins" element={<Admin/>}/>
      <Route path="trainers" element={<Trainers/>}/> 
    </Routes>
    
    </BrowserRouter>
    
    {/* <Navbar />  */}
  
    </>
  );
}

export default App;
