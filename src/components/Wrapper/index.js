import React from 'react';
import './wrapper.css';

function Wrapper() {


  return (
    <main className="position-absolute bg-light">
      <div className="card">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </main>
  )
}

export default Wrapper;