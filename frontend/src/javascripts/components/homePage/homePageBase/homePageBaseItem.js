import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { addNewBase } from '../homePageActions'
import './homePageBaseItem.scss';

let name = 'New Base';
const BaseItemSingle = ({contextMenu, homePageStore, onNewBaseClick }) => {
  return (
    <div className = 'one-base-wrapper'>
      <div className = 'one-base' style = {{backgroundColor: `${contextMenu.contextMenu.color}` }}>
        <div className = 'one-base-icon'>
          <Icon inverted link name={contextMenu.contextMenu.icon} size='huge'
            onClick = { () => onNewBaseClick(name) }
            />
          </div>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  contextMenu: state,
  homePageStore: state
});

const mapDispatchToProps = dispatch => {
  return {
    onNewBaseClick: (name) => { dispatch(addNewBase(name))}
  };
}

const BaseItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseItemSingle)

export default BaseItem