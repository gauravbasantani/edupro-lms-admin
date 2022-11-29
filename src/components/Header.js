import { Link, useLocation, useNavigate } from "react-router-dom";
// import { NavLink } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  let path = useLocation();
  function logout(e) {
    e.preventDefault();
    var r = window.confirm("Are you sure you want to Logout!");
    if (r) {
      localStorage.clear();
      window.location.href = "/";
    }
  }
  if (path.pathname !== "/") {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              EDUPRO Admin
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admins" className="nav-link">
                    Admins
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/trainers" className="nav-link">
                    Trainers
                  </Link>
                </li>
                
                  {/* <li className="nav-item">
                    <Link to="/trainers" className="nav-link">
                      Change Password
                    </Link>
                  </li> */}
              
                  <li className="nav-item justify-content-end">
                    <Link to="/" className="nav-link" onClick={logout}>
                      Log Out
                    </Link>
                  </li>
              </ul>
              
            </div>
           
          </div>
        </nav>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Header;
