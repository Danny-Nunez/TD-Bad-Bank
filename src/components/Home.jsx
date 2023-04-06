import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  

  return (
    <>
<div class="card2">
  <div class="card-body">
    <div ><img src="/images/homebanner.png" className="homeImage" alt="..." /><h5 class="card-title">Welcome to TD Bad Bank</h5></div>
    <p className="card-text">
              Welcome to our unsecure online banking service, where protecting your personal information is our least priority. We are not committed to ensuring the confidentiality and privacy of your data throughout your banking experience with us.
            </p>
            <div className="card-container2">
        <button  className="btn btn-success">
        <Link to="/aboutUs" className="nav-link">
        Learn About TD Bad Bank
                </Link>
        </button>
        <p className="footerTitle">Need to talk to us directly?<span className="footerContact"> Contact us</span> </p>
      </div>
      
  </div>
</div>
      
    </>
  );
};

export default Home;