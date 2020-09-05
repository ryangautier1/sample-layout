import React from 'react';
import './cardnav.css';

function CardNav() {
  return(
    <div className="position-absolute cardnav">
      <ul className="nav flex-column justify-content-between">
        <li className="nav-item card-nav-item">
          Menu Item 1
        </li>
        <li className="nav-item card-nav-item">
          Menu Item 2
        </li>
        <li className="nav-item card-nav-item">
          Menu Item 3
        </li>
        <li className="nav-item card-nav-item">
          Menu Item 4
        </li>
      </ul>
    </div>
  )
}
export default CardNav;