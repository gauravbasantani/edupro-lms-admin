import { Link, useLocation } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';


const Header = () => {
  let path = useLocation();
  if(path.pathname !== '/'){
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary ">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">EDUPRO Admin</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-right" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/admins" className="nav-link" >Admins</Link>
          </li>
          <li className="nav-item">
            <Link to="/trainers" className="nav-link" >Trainers</Link>
          </li>
          <li className="nav-item text-right">
            <Link to="/trainers" className="nav-link" >Change Password</Link>
          </li>
         <div className='d-flex justify-content-end'>
          <li className="nav-item">
            <Link to="/" className="nav-link text-right" >Log Out</Link>
          </li>
          </div>
          
          
        </ul>
      </div>
    </div>
  </nav>
      </div>
    )
  }else{
    return(

      <div></div>
    )
  }
  
}

export default Header
