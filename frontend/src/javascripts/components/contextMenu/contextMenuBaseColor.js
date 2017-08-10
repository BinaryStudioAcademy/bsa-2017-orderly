import React from 'react';
import { connect } from 'react-redux';

let colors = ['#2D7FF9', '#18BFFF', '#02AAA4', '#FF08C2', '#F82B60', '#FF6F2C', '#FCB400', '#20C933', '#8B46FF', '#666666'];
let colortitle = ['blue', 'cyan', 'teal', 'pink', 'red', 'orange', 'yellow', 'green', 'purple', 'grey'];
let id = 0;

let BaseColor = ({ dispatch }) => {
  return (
    <div className = 'base-color-pallete'>
      <div className = 'base-color-pallete-item' title="blue" style = {{backgroundColor: `${colors[0]}` }}></div>
      <div className = 'base-color-pallete-item' title="cyan" style = {{backgroundColor: `${colors[1]}` }}></div>
      <div className = 'base-color-pallete-item' title="teal" style = {{backgroundColor: `${colors[2]}` }}></div>
      <div className = 'base-color-pallete-item' title="pink" style = {{backgroundColor: `${colors[3]}` }}></div>
      <div className = 'base-color-pallete-item' title="red" style = {{backgroundColor: `${colors[4]}` }}></div>
      <div className = 'base-color-pallete-item' title="orange" style = {{backgroundColor: `${colors[5]}` }}></div>
      <div className = 'base-color-pallete-item' title="yellow" style = {{backgroundColor: `${colors[6]}` }}></div>
      <div className = 'base-color-pallete-item' title="green" style = {{backgroundColor: `${colors[7]}` }}></div>
      <div className = 'base-color-pallete-item' title="purple" style = {{backgroundColor: `${colors[8]}` }}></div>
      <div className = 'base-color-pallete-item' title="gray" style = {{backgroundColor: `${colors[9]}` }}></div>
    </div>
  )
}

BaseColor = connect()(BaseColor);

export default BaseColor