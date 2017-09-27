import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import ShareBlock from './shareBlock';
import './teamHeader.scss';

class TeamHeader extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		if (R.isEmpty(this.props.collaborators)) {
			this.props.getCollaborators(this.props.team._id, R.pluck('userId', this.props.team.collaborators))
		}
	}

	render() {
		const currentMember = R.find(R.propEq('userId', R.path(['user', '_id'], this.props)))(R.path(['team', 'collaborators'], this.props))
		const currentRole = R.path(['role'], currentMember)
		return (
			<div className='team-header'>
				<div className='team-name-wrapper'
				     onContextMenu={(event) => {
				     	if (currentRole === 'owner') {
					        event.stopPropagation();
					        event.preventDefault();
					        this.props.toggleTeamPopup(this.props.team._id, !this.props.teamPopupIsShow.isShow)
					        setTimeout(() => {
						        this.props.toggleTeamPopup(this.props.team._id, false)
					        } , 3000)
				        }
				     }}>{this.props.team.name}
				     <Icon name='caret down' color='grey' 
					     onClick={(event) => {
						     if (currentRole === 'owner') {
							     event.stopPropagation();
							     event.preventDefault();
							     this.props.toggleTeamPopup(this.props.team._id, !this.props.teamPopupIsShow.isShow)
							     setTimeout(() => {
								     this.props.toggleTeamPopup(this.props.team._id, false)
							     } , 3000)
						     }
					     }}
				     />
				     </div>
				<ShareBlock currentRole={currentRole}
				            collaborators={this.props.collaborators}
				            updateCollaboratorRole={this.props.updateCollaboratorRole}
				            deleteCollaborator={this.props.deleteCollaborator}
				            addCollaborator={this.props.addCollaborator}
			                allUsers={this.props.allUsers}
				            getAllUsers={this.props.getAllUsers}
				            activeShareModal={this.props.activeShareModal}
				            changeActiveShareModal={this.props.changeActiveShareModal}
				            isShowUserPopup={this.props.isShowUserPopup}
				            showUserPopup={this.props.showUserPopup}
				            team={this.props.team}/>
			</div>
		)
	}
}

export default TeamHeader;