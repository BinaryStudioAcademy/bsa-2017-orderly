import React from 'react';

import BaseList from '../bases/homePageBaseList';
import NamePopup from './namePopup/namePopup';

const TeamItem = (team, menu, handleClick, onNewBaseClick, toggleTeamPopup, teamPopupIsShow,
                  setTeamModal, activeModal, updateTeam, deleteTeam) => {
	return <div className='relative' key={team._id}>
				<div className='team-header'>
					<div className='team-name-wrapper'
						 onContextMenu={(event) => {
						 	event.stopPropagation();
						 	event.preventDefault();
						 	toggleTeamPopup(!teamPopupIsShow)
							setTimeout(toggleTeamPopup, 3000)
						 }}>{team.name}</div>

				</div>
				<NamePopup teamPopupIsShow={teamPopupIsShow}
				           team={team}
				           updateTeam={updateTeam}
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