 import React, {Component} from 'react';
import BaseItem from '../homePageBase/homePageBaseItem';
import HomePageTeamName from './homePageTeamName';
import { Icon } from 'semantic-ui-react';


class BaseList extends Component {
  constructor(props) {
    super(props);
    const onMenuClick = props.onMenuClick;

  }
  render() {
    const props = this.props;  
    console.log(this.props)
      return (
        <div className = 'base-list '  >
          { this.props.bases.map(function(base, current) {
            return (
              <div key={base._id+1}>
                <BaseItem className = "base-list-item"  
                  handleClick = {props.handleClick}  
                  base = {base}
                  menu={props.menu}
                />
              </div>
           )}) 
          }
            <div className='btn-add-base' onClick = {() => props.onNewBaseClick("#234FED")}>+</div>
        </div>
      )
    }
}

export default BaseList
