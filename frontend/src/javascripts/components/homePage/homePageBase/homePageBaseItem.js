import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { addNewBase } from '../homePageActions'
import ContextMenuIcon from '../../contextMenu/contextMenuIcon';
import './homePageBaseItem.scss';

let name = 'New Base';

class BaseItemSingle extends Component {
  constructor(props) {
    super(props);
    const onNewBaseClick = props.onNewBaseClick;
  }
  render() {
    return (
      <div className='base-name'>{this.props.base.name}
        <div className = 'one-base-wrapper' >
        <div className = 'one-base' style = {{backgroundColor: `${this.props.base.color}` }} > 
          <div className = 'one-base-icon'>
            <Icon inverted link  size='huge' name={this.props.base.icon}
              onClick = { () => this.props.onNewBaseClick(name) } 
              />
            </div>
            <div> 
              <div>
                <ContextMenuIcon handleClick = {this.props.handleClick}
                  baseId = {this.props.base.id}
                  isMenu={this.props.base.showMenu}
                  />
              </div>
            </div>
        </div>
</div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewBaseClick: (name) => { dispatch(addNewBase(name))}
  };
}

const BaseItem = connect(
  null,
  mapDispatchToProps
)(BaseItemSingle)

export default BaseItem