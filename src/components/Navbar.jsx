import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";

import RegisterPopUp from "./popups/RegisterPopUp";
import LoginPopUp from "./popups/LoginPopup";

const Navbar = () => {
  const [isRegisterPopUp, setIsRegisterPopUp] = useState(false);
  const [isLoginPopUp, setIsLoginPopUp] = useState(false);
  const { loggedInUser, setLoggedInUser } = useUserContext();
  
  const navigate = useNavigate();
 
  const toggleRegisterPopUp = () => {
    setIsRegisterPopUp(!isRegisterPopUp);
    const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
    navbarToggler.click();
  }
  };

  const toggleLoginPopUp = () => {
    setIsLoginPopUp(!isLoginPopUp);
    const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
    navbarToggler.click();
  }
  };

  const handleLogout = () => {
    setLoggedInUser("");
    navigate("/");
    // Close the navbar menu
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
    navbarToggler.click();
  }
  };
  
  const handleClick = () => {
    // Close the navbar menu
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
    navbarToggler.click();
  }
  };


  return (
  <>
  <div className="navWrapper">
  <div className="topMenu" >
  <ul className="greenMenu">
  <li className="nav-item2"><Link to="/aboutUs" className="nav-link">
                  Business
                </Link></li>
  <li className="nav-item2"><Link to="/aboutUs" className="nav-link">
                  Commercial
                </Link></li>
  <li className="nav-item2"><Link to="/aboutUs" className="nav-link">
                  Investing
                </Link></li>
  <li className="nav-item2"><Link to="/aboutUs" className="nav-link">
                  AboutUs
                </Link></li>
</ul>
    </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            <img src="/images/tdlogo.png" className="navLogo" alt="..." />
            
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link onClick={handleClick} to="/aboutUs" className="nav-link">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleClick} to="/depositWith" className="nav-link">
                  Deposit
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleClick} to="/withdrawWith" className="nav-link">
                  Withdraw
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleClick} to="/allData" className="nav-link">
                  All Data
                </Link>
              </li>
              {loggedInUser ? (
                <>
                  <li className="nav-item">
                    <Link onClick={handleClick} to="/myAccount" className="nav-link">
                      My Account
                    </Link>
                  </li>
                  <li className="nav-item">
                    <span onClick={handleLogout} className="nav-link clickable">
                    <img src="/images/logoutuser.png" className="loginIcon" alt="..." /> <span className="loginTitle">Log Out</span>
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <span
                      onClick={toggleRegisterPopUp}
                      className="nav-link clickable"
                    >
                      Create Account
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={toggleLoginPopUp}
                      className="nav-link clickable"
                    >
                      <img src="/images/lockeduser.png" className="loginIcon" alt="..." /> <span className="loginTitle">Log In</span>
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      </div>
      {isRegisterPopUp && <RegisterPopUp handleClose={toggleRegisterPopUp} />}
      {isLoginPopUp && <LoginPopUp handleClose={toggleLoginPopUp} />}
    </>
  );
};

export default Navbar;
