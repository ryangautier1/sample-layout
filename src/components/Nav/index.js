import React, { useState } from 'react';
import logo from '../../assets/FMTC-Logo.svg';
import './nav.css';

function Nav() {

  // activeNavGroup will store which nav group is active so it can be closed when needed
  const [activeNavGroup, setActiveNavGroup] = useState("");
  // toggles the side nav bar
  const toggleNav = () => {
    document.querySelector(".side-nav").classList.toggle("nav-open");
    document.querySelector(".nav-items").classList.toggle("nav-items-open");
  }

  // toggles the selected nav group within the side nav bar
  const toggleNavGroup = (id) => {

    // if there is an active nav group 
    if (activeNavGroup !== "") {
      console.log("closed " + id);
      closeNavGroup(activeNavGroup);
    }
    // if the clicked tab is not already active, make it active
    if (activeNavGroup !== id) {
      console.log("opened " + id);

      document.getElementById(id).classList.toggle(id + "-active");
      let children = document.getElementById(id).children;

      for (let i = 0; i < children.length; i++) {
        children[i].classList.toggle("hide");
        children[i].classList.toggle("show");
      }
      setActiveNavGroup(id);
    }
    // if the clicked tab was active when clicked, it was closed earlier in this function and no tab is active now
    else {
      console.log("no active tab");
      setActiveNavGroup("");
    }
  }

  const closeNavGroup = (id) => {
    document.getElementById(id).classList.remove(id + "-active");
    let children = document.getElementById(id).children;

    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("show");
      children[i].classList.add("hide");
    }
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
          <li className="nav-item nav-link z-20"
          data-toggle="collapse" data-target="#dashboard">
            <i className="fas fa-tachometer-alt"></i>Dashboard</li>
          <div className="nav-group collapse" id="dashboard">
            <li className="nav-item nav-link">Profile</li>
            <li className="nav-item nav-link">Account</li>
          </div>

          <li className="nav-item nav-link z-20" ><i className="fas fa-credit-card"></i>Billing</li>
          <div className="nav-group" id="billing">
            <li className="nav-item nav-link hide">Subscriptions</li>
            <li className="nav-item nav-link hide">Customers</li>
            <li className="nav-item nav-link hide">Invoices</li>
            <li className="nav-item nav-link hide">Transactions</li>
          </div>

          <li className="nav-item nav-link z-20"><i className="fas fa-briefcase"></i>Catalog</li>

          <li className="nav-item nav-link z-20"><i className="fas fa-chart-bar"></i>Insights</li>

          <li className="nav-item nav-link z-20"><i className="fas fa-tools"></i>Tools</li>

          <li className="nav-item nav-link z-20"><i className="fas fa-cog"></i>Settings</li>

        </ul>
      </nav>
    </div>
  )
}

export default Nav;