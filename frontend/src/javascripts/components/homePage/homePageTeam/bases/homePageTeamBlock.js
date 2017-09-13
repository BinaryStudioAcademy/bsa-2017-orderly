import React, {Component} from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import TeamList from '../teams/teamList';
import { addNewBase, changeBaseParam,
		showContextMenu, deleteBase, cloneBase } from '../../homePageActions';
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
					          updateCollaboratorRole={this.props.updateCollaboratorRole}
					          deleteCollaborator={this.props.deleteCollaborator}
					          addCollaborator={this.props.addCollaborator}
					          allUsers={this.props.allUsers}
					          getAllUsers={this.props.getAllUsers}
					          activeShareModal={this.props.activeShareModal}
					          changeActiveShareModal={this.props.changeActiveShareModal}
					          isShowUserPopup={this.props.isShowUserPopup}
					          showUserPopup={this.props.showUserPopup}
					          collaborators={this.props.collaborators}
					          getCollaborators={this.props.getCollaborators}
					          activeModal={this.props.activeModal}
					          addNewTeam={this.props.addNewTeam}
					          deleteTeam={this.props.deleteTeam}
					          updateTeam={this.props.updateTeam}
					          setTeamModal={this.props.setTeamModal}
					          toggleTeamPopup={this.props.toggleTeamPopup}
					          teamPopupIsShow={this.props.teamPopupIsShow}
					          onNewBaseClick={this.props.onNewBaseClick}
					          saveCurrentTeamRoles={this.props.saveCurrentTeamRoles}
							  user={this.props.user}
					          menu={this.props.menu}
					          teams={this.props.teams}
					          teamNames={this.props.teamNames}
					          />
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: (value, type, _id, base) => {
			if (type === 'show') {
				dispatch(showContextMenu(value, type, _id))
			} else if (type === 'delete') {
				dispatch(deleteBase(value, type, _id))
			} else if (type === 'clone') {
				dispatch(cloneBase(value, _id, base))
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
