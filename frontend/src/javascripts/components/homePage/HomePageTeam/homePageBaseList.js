import React, {Component} from 'react';
import { connect } from 'react-redux';
import BaseItem from '../homePageBase/homePageBaseItem';
import HomePageTeamName from './homePageTeamName';
import { addNewBase } from '../homePageActions';
import { showContextMenu } from '../homePageActions';
import { Icon } from 'semantic-ui-react';
import './homePageTeam.scss';


class BaseList extends Component {
  constructor(props) {
    super(props);
    const onMenuClick = props.onMenuClick;
  }
  render() {
    const props = this.props;  
      return (
        <div className = 'base-list '  >
          { this.props.bases.map(function(base, current) {
            return (
              <div key={base._id+1}>
                <BaseItem className = "base-list-item"  
                    handleClick = {props.handleClick}  
                    base = {base}
                    menu={props.menu}
                    showMenu={props.showMenu}
                />
              </div>
           )}) 
          }
        </div>
      )
    }
}

export default BaseList
