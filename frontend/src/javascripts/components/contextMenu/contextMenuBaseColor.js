import React from 'react';
import { connect } from 'react-redux';
import { colors } from '../configuration/baseColors'
import { changeBaseColor } from './contextMenuActions';

let BaseColorPallete = ({ contextMenu, onColorClick }) => {
  return (
    <div className = 'base-color-pallete'>
      <div className = 'base-color-pallete-item' title="blue" style = {{backgroundColor: `${colors.blue}` }} onClick = {()=>onColorClick(colors.blue)}></div>
      <div className = 'base-color-pallete-item' title="cyan" style = {{backgroundColor: `${colors.cyan}` }} onClick = {()=>onColorClick(colors.cyan)}></div>
      <div className = 'base-color-pallete-item' title="teal" style = {{backgroundColor: `${colors.teal}` }} onClick = {()=>onColorClick(colors.teal)}></div>
      <div className = 'base-color-pallete-item' title="pink" style = {{backgroundColor: `${colors.pink}` }} onClick = {()=>onColorClick(colors.pink)}></div>
      <div className = 'base-color-pallete-item' title="red" style = {{backgroundColor: `${colors.red}` }} onClick = {()=>onColorClick(colors.red)}></div>
      <div className = 'base-color-pallete-item' title="orange" style = {{backgroundColor: `${colors.orange}` }} onClick = {()=>onColorClick(colors.orange)}></div>
      <div className = 'base-color-pallete-item' title="yellow" style = {{backgroundColor: `${colors.yellow}` }} onClick = {()=>onColorClick(colors.yellow)}></div>
      <div className = 'base-color-pallete-item' title="green" style = {{backgroundColor: `${colors.green}` }} onClick = {()=>onColorClick(colors.green)}></div>
      <div className = 'base-color-pallete-item' title="purple" style = {{backgroundColor: `${colors.purple}` }} onClick = {()=>onColorClick(colors.purple)}></div>
      <div className = 'base-color-pallete-item' title="gray" style = {{backgroundColor: `${colors.gray}` }} onClick = {()=>onColorClick(colors.gray)}></div>
    </div>
  )
}

const mapStateToProps = state => ({
  contextMenu: state
});

const mapDispatchToProps = dispatch => {
  return {
    onColorClick: (contextMenu) => {dispatch(changeBaseColor(contextMenu))}
  };
}

const BaseColor = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseColorPallete)

export default BaseColor