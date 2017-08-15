import React, { Component } from 'react';
//import { connect } from 'react-redux';
import BaseName from './contextMenuInput';
import BaseColor from './contextMenuBaseColor';
import BaseIcon from './contextMenuBaseIcon';
import BaseOptions from './contextMenuBaseOptions';
import './contextMenu.scss';

class ContextMenu extends Component {
 
  render(){
    return (
      <div>
        <BaseName handleClick = {this.props.handleClick} baseId = {this.props.baseId}/>
        <BaseColor handleClick = {this.props.handleClick} baseId = {this.props.baseId}/>
        <BaseIcon handleClick = {this.props.handleClick}  baseId = {this.props.baseId}/>
        <BaseOptions handleClick = {this.props.handleClick}  baseId = {this.props.baseId}/>
      </div>
    )
  }
}

export default ContextMenu;