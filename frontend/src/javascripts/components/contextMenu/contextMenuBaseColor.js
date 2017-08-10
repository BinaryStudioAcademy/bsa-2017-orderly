import React from 'react';
import { connect } from 'react-redux';

let BaseColor = ({ dispatch }) => {
  return (
    <ul className = 'base-color-pallete'>
      <li className = 'base-color-pallete-item' style = {{backgroundColor: '#E91E63'}}></li>
    </ul>
  )
}

BaseColor = connect()(BaseColor);

export default BaseColor