import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/FMTC-Logo.svg';
import './nav.css';

function Nav(props) {
  const { toggleNav } = props;
  const [activeTab, setActiveTab] = useState("account");
  

  const changeActiveTab = (tab) => {
    if (activeTab !== "") {
      document.getElementById(activeTab).classList.remove("active-tab");
    }
    document.getElementById(tab).classList.add("active-tab");
    setActiveTab(tab)
    // close the nav if the screen is small
    if (window.innerWidth < 651) {
      toggleNav();
    }
  }

  return (
    <div className="position-absolute z-10">
      <header className="navbar navbar-light bg-white fixed-top shadow-sm">
        <div>
          <i className="fas fa-bars nav-toggle" onClick={() => toggleNav()}></i>
          <img src={logo} alt="FMTC logo" className="logo" />
        </div>
        <div className="header-icons">
          <i className="fas fa-bell mr-4"></i>
          <i className="fas fa-comment-alt"></i>
        </div>
      </header>


      <nav className="fixed-right side-nav">
        <ul className="nav-items nav flex-column">
          <li className="main-nav-item nav-item nav-link nav-menu-header"
            data-toggle="collapse" data-target="#dashboard"
            aria-expanded="false" aria-controls="dashboard">
            <i className="fas fa-tachometer-alt"></i>Dashboard</li>
          <div className="nav-group collapse" id="dashboard">
            <Link to="/profile">
              <li className="main-nav-item nav-item nav-link" id="profile" onClick={() => changeActiveTab("profile")}>Profile</li>
            </Link>
            <Link to="/account">
              <li className="main-nav-item nav-item nav-link active-tab" id="account" onClick={() => changeActiveTab("account")}>Account</li>
            </Link>
          </div>

          <li className="main-nav-item nav-item nav-link nav-menu-header"
            data-toggle="collapse" data-target="#billing"
            aria-expanded="false" aria-controls="billing">
            <i className="fas fa-credit-card"></i>Billing</li>
          <div className="nav-group collapse" id="billing">
            <Link to="/subscriptions">
              <li className="main-nav-item nav-item nav-link" id="subscriptions" onClick={() => changeActiveTab("subscriptions")}>Subscriptions</li>
            </Link>
            <Link to="customers">
              <li className="main-nav-item nav-item nav-link" id="customers" onClick={() => changeActiveTab("customers")}>Customers</li>
            </Link>
            <Link to="invoices">
              <li className="main-nav-item nav-item nav-link" id="invoices" onClick={() => changeActiveTab("invoices")}>Invoices</li>
            </Link>
            <Link to="transactions">
              <li className="main-nav-item nav-item nav-link" id="transactions" onClick={() => changeActiveTab("transactions")}>Transactions</li>
            </Link>
          </div>

          <li className="main-nav-item nav-item nav-link nav-menu-header"
            data-toggle="collapse" data-target="#catalog"
            aria-expanded="false" aria-controls="catalog">
            <i className="fas fa-briefcase"></i>Catalog</li>
          <div className="nav-group collapse" id="catalog">
            <Link to="deals">
              <li className="main-nav-item nav-item nav-link" id="deals" onClick={() => changeActiveTab("deals")}>Deals</li>
            </Link>
            <Link to="coupons">
              <li className="nav-item nav-link" id="coupons" onClick={() => changeActiveTab("coupons")}>Coupons</li>
            </Link>
          </div>

          <li className="main-nav-item nav-item nav-link nav-menu-header"
            data-toggle="collapse" data-target="#tools"
            aria-expanded="false" aria-controls="tools">
            <i className="fas fa-tools"></i>Tools</li>
          <div className="nav-group collapse" id="tools">
            <Link to="analytics">
              <li className="main-nav-item nav-item nav-link" id="analytics" onClick={() => changeActiveTab("analytics")}>Analytics</li>
            </Link>
            <Link to="history">
              <li className="main-nav-item nav-item nav-link" id="history" onClick={() => changeActiveTab("history")}>History</li>
            </Link>
          </div>

          <li className="main-nav-item nav-item nav-link nav-menu-header"
            data-toggle="collapse" data-target="#settings"
            aria-expanded="false" aria-controls="settings">
            <i className="fas fa-cog"></i>Settings</li>
          <div className="nav-group collapse" id="settings">
            <Link to="info">
              <li className="main-nav-item nav-item nav-link" id="info" onClick={() => changeActiveTab("info")}>Account Information</li>
            </Link>
          </div>

          <li className="nav-icons">
            <i className="fas fa-bell mr-4"></i>
            <i className="fas fa-comment-alt"></i>
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default Nav;