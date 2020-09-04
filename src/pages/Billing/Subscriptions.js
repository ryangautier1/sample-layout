import React from 'react';
import CardNav from '../../components/CardNav';

function Subscriptions() {
  return (
    <div className="card">
      <div className="card-header">
        Subscriptions
      </div>
      <CardNav />
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  )
}

export default Subscriptions;