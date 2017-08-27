import React, {Component} from 'react';
import R from 'ramda';

import ShareBlock from './shareBlock';
import './teamHeader.scss';

class TeamHeader extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.getCollaborators(this.props.team._id, R.pluck('userId', this.props.team.collaborators))
	}

	render() {
		return (
			<div className='team-header'>
				<div className='team-name-wrapper'
				     onContextMenu={(event) => {
					     event.stopPropagation();
					     event.preventDefault();
					     this.props.toggleTeamPopup(this.props.team._id, !this.props.teamPopupIsShow.isShow)
					     setTimeout(() => {
						     this.props.toggleTeamPopup(this.props.team._id, false)
					     } , 3000)
				     }}>{this.props.team.name}</div>
				<ShareBlock collaborators={this.props.collaborators}
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