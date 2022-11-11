import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

import Admin from "./components/Admin";
import Trainers from "./components/Trainers/Trainers";
import GuardedRoute from "./GaurdedRoute";

function App() {
  
  let adminLoggedIn = false;
  
  if (localStorage.getItem("usertype") != null) {
    if (localStorage.getItem("usertype") === "admin") adminLoggedIn = true;
  }
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<GuardedRoute Component={Dashboard} auth={adminLoggedIn} />} />
          <Route path="admins" element={<GuardedRoute Component={Admin} auth={adminLoggedIn} />} />
          <Route path="trainers" element={<GuardedRoute Component={Trainers} auth={adminLoggedIn} />} />
        </Routes>
      </BrowserRouter>

      {/* <Navbar />  */}
    </>
  );
}

export default App;
