import React from 'react';

import BaseList from '../bases/homePageBaseList';
import NamePopup from './namePopup/namePopup';
import TeamHeader from './teamHeader/teamHeader';

let tempKey = 0;

const TeamItem = (team, menu, handleClick, onNewBaseClick, toggleTeamPopup, teamPopupIsShow,
                  setTeamModal, activeModal, updateTeam, deleteTeam, getCollaborators,
                  collaborators, showUserPopup, isShowUserPopup) => {
	return <div className='team-item relative' key={team._id || ++tempKey}>
				<TeamHeader team={team}
				            isShowUserPopup={isShowUserPopup}
				            showUserPopup={showUserPopup}
				            collaborators={collaborators}
				            getCollaborators={getCollaborators}
				            teamPopupIsShow={teamPopupIsShow}
				            toggleTeamPopup={toggleTeamPopup} />
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