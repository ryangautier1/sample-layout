import React from 'react';
import './cardnav.css';

function CardNav(props) {
  const { toggleActiveCardNav } = props;


  return (
    <div>
      {/* cardnav-left will show on larger screens */}
      <div className="position-absolute card-nav">
        <ul className="nav card-nav-flex">
          <li className="nav-item card-nav-item card-nav-item-active" id="menuItem1" onClick={() => toggleActiveCardNav("menuItem1")}>
              Menu Item 1
          </li>
          <li className="nav-item card-nav-item" id="menuItem2" onClick={() => toggleActiveCardNav("menuItem2")}>
              Menu Item 2
          </li>
          <li className="nav-item card-nav-item" id="menuItem3" onClick={() => toggleActiveCardNav("menuItem3")}>
              Menu Item 3
          </li>
          <li className="nav-item card-nav-item" id="menuItem4" onClick={() => toggleActiveCardNav("menuItem4")}>
              Menu Item 4
          </li>
          <li className="nav-item card-nav-item" id="menuItem5" onClick={() => toggleActiveCardNav("menuItem5")}>
              Menu Item 5
          </li>
        </ul>
      </div>
    </div>
  )
}
export default CardNav;