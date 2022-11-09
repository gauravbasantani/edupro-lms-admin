import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-lg bg-primary ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">EDUPRO Admin</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link to="/admins" class="nav-link" >Admins</Link>
        </li>
        <li class="nav-item">
          <Link to="/trainers" class="nav-link" >Trainers</Link>
        </li>
        <li class="nav-item text-right">
          <Link to="/trainers" class="nav-link" >Change Password</Link>
        </li>
        <ul className='navbar-nav d-flex'>
        <li class="nav-item">
          <Link to="/" class="nav-link text-right" >Log Out</Link>
        </li>
        </ul>
        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
