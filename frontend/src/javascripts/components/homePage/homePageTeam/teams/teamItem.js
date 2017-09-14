import React from 'react';

import BaseList from '../bases/homePageBaseList';
import NamePopup from './namePopup/namePopup';
import TeamHeader from './teamHeader/teamHeader';

let tempKey = 0;

const TeamItem = (team, menu, handleClick, onNewBaseClick, toggleTeamPopup, teamPopupIsShow,
                  setTeamModal, activeModal, updateTeam, deleteTeam, getCollaborators,
                  collaborators, showUserPopup, isShowUserPopup, activeShareModal, changeActiveShareModal,
                  allUsers, getAllUsers, addCollaborator, deleteCollaborator, updateCollaboratorRole,
                  saveCurrentTeamRoles, teamNames) => {
	return <div className='team-item relative' key={team._id || ++tempKey}>
				<TeamHeader team={team}
				            updateCollaboratorRole={updateCollaboratorRole}
				            deleteCollaborator={deleteCollaborator}
				            allUsers={allUsers}
				            addCollaborator={addCollaborator}
				            getAllUsers={getAllUsers}
				            activeShareModal={activeShareModal}
				            changeActiveShareModal={changeActiveShareModal}
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
				          saveCurrentTeamRoles={saveCurrentTeamRoles}
				          team={team}
				          menu={menu}
				          teamId={team._id}
				          teamNames={teamNames}
				          onNewBaseClick={onNewBaseClick}
				          bases={team.bases}
				          collaborators={collaborators}
				          />
			</div>
};

export default TeamItem;