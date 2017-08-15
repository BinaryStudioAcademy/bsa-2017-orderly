import React, {Component} from 'react';
import { connect } from 'react-redux';
import BaseItem from '../homePageBase/homePageBaseItem';
import HomePageTeamName from './homePageTeamName';
import { addNewBase, getAllBases, changeBaseParam, showContextMenu  } from '../homePageActions';
import BaseList from './homePageBaseList';
import { Icon } from 'semantic-ui-react';
import './homePageTeam.scss';

let name = 'New Base';
let isShow = false;
class HomePageTeamBlock extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    const baseStore = props.baseStore;
    const handleClick = props.handleClick;
    const onNewBaseClick = props.onNewBaseClick;
  }  

render() {
  return (
    <div className = "team-wrapper">
        <div className = "team-header">
          <HomePageTeamName/>
          <button className='btn' onClick = { () => this.props.onNewBaseClick(name)}>Add Base</button>
        </div>
        <div className = "team-block-wrapper">
          <BaseList 
            handleClick = {this.props.handleClick}
            bases = {this.props.bases}
            menu={this.props.menu}
            showMenu={this.props.showMenu}
          />
        </div>
    </div>
  )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (value, type, _id) => {
      if ( type === 'show' ) {
        dispatch(showContextMenu(value, type, _id))
      } else {
        dispatch(changeBaseParam(value, type, _id))
      }
    },
    onNewBaseClick: (name) => { dispatch(addNewBase(name))}
  }
}

HomePageTeamBlock  = connect(null, mapDispatchToProps)(HomePageTeamBlock);


export default HomePageTeamBlock 