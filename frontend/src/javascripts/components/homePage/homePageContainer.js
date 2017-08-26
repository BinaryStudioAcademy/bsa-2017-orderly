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
                             showMenu={this.props.showMenu}
          />
        </div>
      </div>
    )
  }
}

export default HomePageContainer