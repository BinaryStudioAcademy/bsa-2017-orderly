import React, {Component} from 'react';
import R from 'ramda';

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
					this.props.activeModal, this.props.updateTeam, this.props.deleteTeam))(this.props.teams || []) }
			</div>
		)
	}
}



export default TeamList
