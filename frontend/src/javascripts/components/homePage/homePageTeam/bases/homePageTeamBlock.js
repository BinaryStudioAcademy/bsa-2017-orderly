import React, {Component} from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import TeamList from '../teams/teamList';
import { addNewBase, changeBaseParam,
		showContextMenu, deleteBase } from '../../homePageActions';
import '../teams/teamList.scss'

class HomePageTeamBlock extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.user && !R.equals(nextProps.user, this.props.user)) {
			nextProps.getTeamsByUser(nextProps.user);
		}
		if (nextProps.teams && !R.equals(nextProps.teams, this.props.teams)) {
			R.forEach( team => {
				nextProps.getBasesByTeam(team._id)
			})(nextProps.teams)
		}
	}


	render() {
		return (
			<div className="team-wrapper">
				<div className="team-block-wrapper">
					<TeamList handleClick={this.props.handleClick}
					          activeModal={this.props.activeModal}
					          deleteTeam={this.props.deleteTeam}
					          updateTeam={this.props.updateTeam}
					          setTeamModal={this.props.setTeamModal}
					          toggleTeamPopup={this.props.toggleTeamPopup}
					          teamPopupIsShow={this.props.teamPopupIsShow}
					          onNewBaseClick={this.props.onNewBaseClick}
					          menu={this.props.menu}
					          teams={this.props.teams}/>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: (value, type, _id) => {
			if (type === 'show') {
				dispatch(showContextMenu(value, type, _id))
			} else if (type === 'delete') {
				dispatch(deleteBase(value, type, _id))
			} else {
				dispatch(changeBaseParam(value, type, _id))
			}
		},

		onNewBaseClick: (color, teamId) => {
			dispatch(addNewBase(teamId))
		},
	}
}

HomePageTeamBlock  = connect(null, mapDispatchToProps)(HomePageTeamBlock);


export default HomePageTeamBlock 
