import React from 'react';
import { List } from 'semantic-ui-react';
import R from 'ramda';

import TeamModal from './teamModal';
import './namePopup.scss';

const hidingStyle = (popupIsShow, currentTeamId) => ({
	display: popupIsShow.isShow && currentTeamId === popupIsShow.teamId ? 'block' : 'none'
})

const NamePopup = ({ teamPopupIsShow, setTeamModal,
	                   activeModal, team, updateTeam, deleteTeam }) => (
	<div>
		<List className='team_popup'
		      style={hidingStyle(teamPopupIsShow, team._id)}>
			<List.Item className='list_menu'
			           onClick={() => {
			           	setTeamModal('settings')
			}}>
				<List.Icon name='cogs'/>
				<List.Content>Team settings</List.Content>
			</List.Item>
			<List.Item className='list_menu'
			           onClick={() => {
				           setTeamModal('rename')
			}}>
				<List.Icon name='pencil'/>
				<List.Content>Rename team</List.Content>
			</List.Item>
			<List.Item className='list_menu'
			           onClick={() => {
			           	setTeamModal('delete')
			}}>
				<List.Icon name='trash outline'/>
				<List.Content>Delete team</List.Content>
			</List.Item>
		</List>
		<TeamModal team={team}
		           currentClickedTeamId={teamPopupIsShow.teamId}
		           updateTeam={updateTeam}
		           deleteTeam={deleteTeam}
		           setTeamModal={setTeamModal}
		           activeModal={activeModal}/>
	</div>
)

export default NamePopup;