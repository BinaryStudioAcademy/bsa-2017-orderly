import React, {Component} from 'react';
import { connect } from 'react-redux';
import BaseItem from '../homePageBase/homePageBaseItem';
import HomePageTeamName from './homePageTeamName';
import { addNewBase } from '../homePageActions';
import { showContextMenu, changeBaseColor, changeBaseIcon, changeBaseName } from '../homePageActions';
import BaseList from './homePageBaseList';
import { Icon } from 'semantic-ui-react';
import './homePageTeam.scss';

class HomePageTeamBlock extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    const baseStore = props.baseStore;
    const handleClick = props.handleClick;
  }  

render() {

  return (
    <div className = "team-wrapper">
        <div className = "team-header">
          <HomePageTeamName/>
        </div>
        <div className = "team-block-wrapper">
          <BaseList 
            handleClick = {this.props.handleClick}
            bases = {this.props.baseStore.bases}
          />
        </div>
    </div>
  )
  }
}

const mapStateToProps = state => ({
  baseStore: state.baseStore
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: (data, type, id) => {
        if (type=='icon') {
          dispatch(changeBaseIcon(data, type, id))
        } 
        if (type =='color') {
          dispatch(changeBaseColor(data, type, id))
        }
        if (type =='name') {
          dispatch(changeBaseName(data, type, id))
        }
        if (type =='show') { 
          dispatch(showContextMenu(data, type, id))
        }
    }
  }
}

HomePageTeamBlock  = connect(mapStateToProps, mapDispatchToProps)(HomePageTeamBlock);


export default HomePageTeamBlock 