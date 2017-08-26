import React, {Component} from 'react';
import R from 'ramda';

import ShareBlock from './shareBlock';
import './teamHeader.scss';

class TeamHeader extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log(this.props.team, 'inside component will mount')
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
				<ShareBlock team={this.props.team}/>
			</div>
		)
	}
}

// const TeamHeader = ({ toggleTeamPopup, team, teamPopupIsShow }) => {
// 	return (
//
// 	)
// }

export default TeamHeader;