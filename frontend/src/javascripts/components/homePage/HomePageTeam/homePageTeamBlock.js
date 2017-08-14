import React, {Component} from 'react';
import { connect } from 'react-redux';
import BaseItem from '../homePageBase/homePageBaseItem';
import HomePageTeamName from './homePageTeamName';
import { addNewBase } from '../homePageActions';
import { changeBaseParam } from '../homePageActions';
import BaseList from './homePageBaseList';
import { Icon } from 'semantic-ui-react';
import './homePageTeam.scss';

let name = 'New Base';
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
            bases = {this.props.baseStore.bases}
          />
        </div>
    </div>
  )
  }
}

const mapStateToProps = (state) => ({
  baseStore: state.baseStore
  }) 

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (value, type, id) => {
      dispatch(changeBaseParam(value, type, id))
    },
    onNewBaseClick: (name) => { dispatch(addNewBase(name))}
  }
}

HomePageTeamBlock  = connect(mapStateToProps, mapDispatchToProps)(HomePageTeamBlock);


export default HomePageTeamBlock 