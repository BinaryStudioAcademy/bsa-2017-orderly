import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

import ContextMenuIcon from '../../../contextMenu/contextMenuIcon';
import { createRolesObject } from '../../homePageService'
import './homePageBaseItem.scss'

class BaseItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      const rolesObject = createRolesObject(R.path(['collaborators'], this.props.team))
    return (
      <div className='base-wrapper'>
        <div className='base-name-header'>
          {this.props.base.name}
        </div>
        <div className = 'one-base-wrapper' >
        <div className = 'one-base' style = {{backgroundColor: `${this.props.base.color}` }} > 
          <div className = 'one-base-icon'>
              <Icon inverted link  size='huge'
                    onClick={() => {
                        browserHistory.push(`/dashboard/${this.props.base._id}/${this.props.base.tables[0]}`)
	                    this.props.saveCurrentTeamRoles(R.mergeWith(R.merge, rolesObject, this.props.collaborators[this.props.teamId]))
                    }}
                    name={this.props.base.icon}
              />
            </div>
            <div> 
              <div>
                <ContextMenuIcon 
                  teamNames={this.props.teamNames}
                  handleClick = {this.props.handleClick}
                  base = {this.props.base}
                  menu={this.props.menu}  
                  teamId={this.props.teamId}           
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