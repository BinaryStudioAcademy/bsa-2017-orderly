import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import HomePageTeamBlock from './homePageTeam/homePageTeamBlock';
import HomePageHeader from './homePageHeader';
import './homePage.scss';

class HomePageContainer extends React.Component {
  constructor(props) {
      super(props);
  }
  componentWillMount() {
      this.props.getBases();
  }

  render() {
    return (
      <div className = "home-page-wrapper">
        <HomePageHeader />
        <div className = 'body'>
          <HomePageTeamBlock bases={this.props.bases}
          menu={this.props.menu}
          showMenu={this.props.showMenu}
          />
        </div>
      </div>
    )
  }
}

export default HomePageContainer