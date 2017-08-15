import React from 'react';
//import { connect } from 'react-redux';
import { Popup, Icon, Input } from 'semantic-ui-react';

let id = 0;
let BaseOptions = () => {

  return (
    <div className = 'base-options-wrapper'>
      <ul className = 'base-options-list'>
        <li className = 'base-options-list-item'>
          <Icon name='share alternate square' key = {id++} className='icon' as = 'i' color='black' size='small'/>
          Share
        </li>
        <li className = 'base-options-list-item'>
          <Icon name='info circle' key = {id++} className='icon' color='black' size='small'/>
          Description
        </li>
        <li className = 'base-options-list-item'>
          <Icon name='copy' key = {id++} className='icon' color='black' size='small'/>
          Duplicate base
        </li>
        <li className = 'base-options-list-item'>
          <Icon name='slack' key = {id++} className='icon' color='black' size='small'/>
          Slack notifications
        </li>
        <li>
          <Icon name='trash' key = {id++} className='icon' color='black' size='small'/>
          Delete Base
        </li> 
      </ul>
    </div>
  )
}

export default BaseOptions

