import React from 'react';
import ContextMenu from './contextMenu'
import { Icon } from 'semantic-ui-react';
import './contextMenu.scss';


class ContextMenuIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false
    };

    this.handleClickOnMenu = this.handleClickOnMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  
  handleClickOnMenu(event) {
    
    if (!this.state.menuVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       menuVisible: !prevState.menuVisible,
    }));
  }
  
  handleOutsideClick(e) {
    if ( event.target.closest(".menu-show-2") === null) {
      if (this.node) {
        if (this.node.contains(e.target)) {
          return;
        }
      }
    this.handleClickOnMenu();
    }
  }

render() {
    return(
      <div className = 'menu-icon-wrapp'>
        <div ref={node => { this.node = node }} >
         <div  className = 'setting' onClick={(event) => this.handleClickOnMenu(event)} > 
          <Icon inverted link name='setting' size='large' color='black' 
            onClick={()=>this.props.handleClick(null, 'show', this.props.base._id)}
          />
        </div>
        </div>
        <div className ={this.props.menu === this.props.base._id && this.state.menuVisible? "menu-show-2" : "none"}>
          <ContextMenu 
            handleClick = {this.props.handleClick} 
            base = {this.props.base} 
            />
        </div>
      </div>
      )
  }
}


export default ContextMenuIcon