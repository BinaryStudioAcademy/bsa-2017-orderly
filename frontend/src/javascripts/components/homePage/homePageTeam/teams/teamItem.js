import React from 'react';

import BaseList from '../bases/homePageBaseList';
import NamePopup from './namePopup/namePopup';

let tempKey = 0;

const TeamItem = (team, menu, handleClick, onNewBaseClick, toggleTeamPopup, teamPopupIsShow,
                  setTeamModal, activeModal, updateTeam, deleteTeam) => {
	return <div className='team-item relative' key={team._id || ++tempKey}>
				<div className='team-header'>
					<div className='team-name-wrapper'
						 onContextMenu={(event) => {
						 	event.stopPropagation();
						 	event.preventDefault();
							toggleTeamPopup(team._id, !teamPopupIsShow.isShow)
							setTimeout(() => {
								toggleTeamPopup(team._id, false)
							} , 3000)
						 }}>{team.name}</div>

				</div>
				<NamePopup team={team}
				           updateTeam={updateTeam}
				           teamPopupIsShow={teamPopupIsShow}
				           activeModal={activeModal}
				           setTeamModal={setTeamModal}
				           deleteTeam={deleteTeam}
				           toggleTeamPopup={toggleTeamPopup} />
				<BaseList handleClick={handleClick}
				          menu={menu}
				          teamId={team._id}
				          onNewBaseClick={onNewBaseClick}
				          bases={team.bases}/>
			</div>
};

export default TeamItem;