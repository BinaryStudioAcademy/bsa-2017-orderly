import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router';
import ContextMenuIcon from '../../../contextMenu/contextMenuIcon';
import './homePageBaseItem.scss'

class BaseItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='base-wrapper'>
        <div className='base-name-header'>
          {this.props.base.name}
        </div>
        <div className = 'one-base-wrapper' >
        <div className = 'one-base' style = {{backgroundColor: `${this.props.base.color}` }} > 
          <div className = 'one-base-icon'>
            <Link to={`/dashboard/${this.props.base._id}/${this.props.base.tables[0]}`}>
              <Icon inverted link  size='huge' name={this.props.base.icon} 
              />
            </Link>
            </div>
            <div> 
              <div>
                <ContextMenuIcon 
                  handleClick = {this.props.handleClick}
                  base = {this.props.base}
                  menu={this.props.menu}             
                  />
              </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default BaseItem