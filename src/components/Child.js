import React from 'react';
import './child.css';

const Child = ({showModal, setShowModal}) => {
  return (
    <div className='child'>
      <h2>Child Component</h2>
      <button onClick={()=>setShowModal(true)}>Show Modal</button>
      <br />
      {
        showModal &&
        <div>
            <h2>Modal Content</h2>
            <p>This is the modal content</p>
        </div>
      }
    </div>
  )
}

export default Child
