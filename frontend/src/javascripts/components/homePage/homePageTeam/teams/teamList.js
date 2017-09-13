import React, {Component} from 'react';
import R from 'ramda';
import { Icon } from 'semantic-ui-react';

import TeamItem from './teamItem';



class TeamList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{ R.map((team) => TeamItem(team, this.props.menu, this.props.handleClick, this.props.onNewBaseClick,
					this.props.toggleTeamPopup, this.props.teamPopupIsShow, this.props.setTeamModal,
					this.props.activeModal, this.props.updateTeam, this.props.deleteTeam, this.props.getCollaborators,
					this.props.collaborators, this.props.showUserPopup, this.props.isShowUserPopup,
					this.props.activeShareModal, this.props.changeActiveShareModal, this.props.allUsers,
					this.props.getAllUsers, this.props.addCollaborator, this.props.deleteCollaborator,
					this.props.updateCollaboratorRole, this.props.teamNames, this.props.saveCurrentTeamRoles))(this.props.teams || []) }
				<div className='add-header'>
					<div className='team-name-wrapper'
					     onClick={() => {
						      this.props.addNewTeam(this.props.user._id)
					     }}><Icon name='plus' size='small'/>Add new team</div>

				</div>
			</div>
		)
	}
}



export default TeamList
