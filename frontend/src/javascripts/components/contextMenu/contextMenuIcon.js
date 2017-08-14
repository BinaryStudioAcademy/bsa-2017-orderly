import React from 'react';
import ContextMenu from './contextMenu'
import { Icon } from 'semantic-ui-react';
import './contextMenu.scss';


const ContextMenuIcon = (props) => {
  return(
    <div className = 'menu-icon-wrapp'>
       <div  className = 'setting'> 
        <Icon inverted link name='setting' size='large' color='black' 
        onClick={()=>props.handleClick(true, 'showMenu', props.baseId)}
        />
      </div>
      <div className ={props.isMenu ? "menu-show-2": "none"}>
        <ContextMenu handleClick = {props.handleClick} baseId = {props.baseId} />
      </div>
    </div>
    )
}


export default ContextMenuIcon