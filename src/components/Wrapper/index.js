import React from 'react';
import './wrapper.css';

function Wrapper(props) {


  return (
    <main className="position-absolute bg-light">
      {props.children}
    </main>
  )
}

export default Wrapper;