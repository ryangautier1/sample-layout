import React from 'react';
import logo from '../../assets/FMTC-Logo.svg';
import './nav.css';

function Nav() {
  const toggleNav = () => {
    document.querySelector(".side-nav").classList.toggle("nav-open");
    document.querySelector(".nav-items").classList.toggle("nav-items-open");
  }

  return (
    <div className="position-absolute z-10">
      <header className="navbar navbar-light bg-white fixed-top shadow-sm">
        <div>
          <img src={logo} alt="FMTC logo" className="logo" />
          <button className="navbar-toggler" type="button" onClick={() => toggleNav()}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </header>


      <nav className="fixed-right side-nav">
        <ul className="nav-items nav flex-column">
          <li className="nav-item nav-link"><i className="fas fa-tachometer-alt"></i>Dashboard</li>
          <li className="nav-item nav-link"><i class="fas fa-credit-card"></i>Billing</li>
          <li className="nav-item nav-link"><i class="fas fa-briefcase"></i>Catalog</li>
          <li className="nav-item nav-link"><i class="fas fa-chart-bar"></i>Insights</li>
          <li className="nav-item nav-link"><i class="fas fa-tools"></i>Tools</li>
          <li className="nav-item nav-link"><i class="fas fa-cog"></i>Settings</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;