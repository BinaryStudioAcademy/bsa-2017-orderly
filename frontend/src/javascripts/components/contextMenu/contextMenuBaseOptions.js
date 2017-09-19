import React from 'react';
import { Popup, Icon, Input } from 'semantic-ui-react';
import ModalDublicateBase from '../homePage/homePageTeam/bases/dublicateBasePopUp'

let BaseOptions = (props) => {
  return (
    <div className = 'base-options-wrapper'>
      <ul className = 'base-options-list'>
        <li className = 'base-options-list-item disabled'>
          <Icon name='share alternate square' className='icon' as = 'i' color='black' size='small'/>
          Share
        </li>
        <li className = 'base-options-list-item disabled'>
          <Icon name='info circle' className='icon' color='black' size='small'/>
          Description
        </li>
        <ModalDublicateBase handleClick = {props.handleClick} teamId = {props.teamId} base = {props.base} teamNames={props.teamNames}/>
        <li className = 'base-options-list-item disabled'>
          <Icon name='slack' className='icon' color='black' size='small'/>
          Slack notifications
        </li>
        <li className = 'base-options-list-item' onClick={()=> props.handleClick(null, 'delete', props.base._id)}>
          <Icon name='trash' className='icon' color='black' size='small'/>
          Delete Base
        </li> 
      </ul>
    </div>
  )
}

export default BaseOptions

