import React from 'react';
import logo from '../../assets/FMTC-Logo.svg';
import './nav.css';

function Nav() {
  // toggles the side nav bar
  const toggleNav = () => {
    document.querySelector(".side-nav").classList.toggle("nav-open");
    document.querySelector(".nav-items").classList.toggle("nav-items-open");
  }

  return (
    <div className="position-absolute z-10">
      <header className="navbar navbar-light bg-white fixed-top shadow-sm">
        <div>
          <i className="fas fa-bars nav-toggle" onClick={() => toggleNav()}></i>
          <img src={logo} alt="FMTC logo" className="logo" />
        </div>
      </header>


      <nav className="fixed-right side-nav">
        <ul className="nav-items nav flex-column">
          <li className="nav-item nav-link nav-menu-header"
            data-toggle="collapse" data-target="#dashboard"
            aria-expanded="false" aria-controls="dashboard">
            <i className="fas fa-tachometer-alt"></i>Dashboard</li>
          <div className="nav-group collapse" id="dashboard">
            <li className="nav-item nav-link">Profile</li>
            <li className="nav-item nav-link">Account</li>
          </div>

          <li className="nav-item nav-link nav-menu-header"
            data-toggle="collapse" data-target="#billing"
            aria-expanded="false" aria-controls="billing">
            <i className="fas fa-credit-card"></i>Billing</li>
          <div className="nav-group collapse" id="billing">
            <li className="nav-item nav-link">Subscriptions</li>
            <li className="nav-item nav-link">Customers</li>
            <li className="nav-item nav-link">Invoices</li>
            <li className="nav-item nav-link">Transactions</li>
          </div>

          <li className="nav-item nav-link nav-menu-header"
            data-toggle="collapse" data-target="#catalog"
            aria-expanded="false" aria-controls="catalog">
            <i className="fas fa-briefcase"></i>Catalog</li>
          <div className="nav-group collapse" id="catalog">
            <li className="nav-item nav-link">Deals</li>
            <li className="nav-item nav-link">Coupons</li>
          </div>

          <li className="nav-item nav-link nav-menu-header"
            data-toggle="collapse" data-target="#tools"
            aria-expanded="false" aria-controls="tools">
            <i className="fas fa-tools"></i>Tools</li>
          <div className="nav-group collapse" id="tools">
            <li className="nav-item nav-link">Deals</li>
            <li className="nav-item nav-link">Coupons</li>
          </div>

          <li className="nav-item nav-link nav-menu-header"
            data-toggle="collapse" data-target="#settings"
            aria-expanded="false" aria-controls="settings">
            <i className="fas fa-cog"></i>Settings</li>
          <div className="nav-group collapse" id="settings">
            <li className="nav-item nav-link">Account Information</li>
          </div>

        </ul>
      </nav>
    </div>
  )
}

export default Nav;