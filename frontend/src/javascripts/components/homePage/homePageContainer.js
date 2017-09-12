import React from 'react';
import HomePageTeamBlock from './homePageTeam/bases/homePageTeamBlock';
import HomePageHeader from './homePageHeader';
import './homePage.scss';

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getUser();
  }


  render() {
    return (
      <div className = "home-page-wrapper">
        <HomePageHeader user={this.props.user}/>
        <div className = 'home-page-body'>
          <HomePageTeamBlock teams={this.props.teams}
                             tables={this.props.tables}
                             updateCollaboratorRole={this.props.updateCollaboratorRole}
                             deleteCollaborator={this.props.deleteCollaborator}
                             addCollaborator={this.props.addCollaborator}
                             allUsers={this.props.allUsers}
                             getAllUsers={this.props.getAllUsers}
                             activeShareModal={this.props.activeShareModal}
                             changeActiveShareModal={this.props.changeActiveShareModal}
                             isShowUserPopup={this.props.isShowUserPopup}
                             showUserPopup={this.props.showUserPopup}
                             collaborators={this.props.collaborators}
                             getCollaborators={this.props.getCollaborators}
                             updateTeam={this.props.updateTeam}
                             addNewTeam={this.props.addNewTeam}
                             deleteTeam={this.props.deleteTeam}
                             activeModal={this.props.activeModal}
                             setTeamModal={this.props.setTeamModal}
                             getBasesByTeam={this.props.getBasesByTeam}
                             getTeamsByUser={this.props.getTeamsByUser}
                             teamPopupIsShow={this.props.teamPopupIsShow}
                             toggleTeamPopup={this.props.toggleTeamPopup}
                             user={this.props.user}
                             menu={this.props.menu}
                             saveCurrentTeamRoles={this.props.saveCurrentTeamRoles}
                             showMenu={this.props.showMenu}
          />
        </div>
      </div>
    )
  }
}

export default HomePageContainer