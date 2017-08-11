import React from 'react';
import { connect } from 'react-redux';
import BaseName from './contextMenuInput';
import BaseColor from './contextMenuBaseColor';
import BaseIcon from './contextMenuBaseIcon';
import BaseOptions from './contextMenuBaseOptions';
import './contextMenu.scss';

let ContextMenu = ({ contextMenu }) => {
  return (
    <div className ={contextMenu.contextMenu.showMenu? "menu": "none"}>
      <BaseName />
      <BaseColor />
      <BaseIcon />
      <BaseOptions />
    </div>
  )
}

const mapStateToProps = state => ({
  contextMenu: state
});

ContextMenu = connect(mapStateToProps, null)(ContextMenu);

export default ContextMenu;