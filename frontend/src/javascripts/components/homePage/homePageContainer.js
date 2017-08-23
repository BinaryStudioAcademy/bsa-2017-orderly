import React from 'react';
import { connect } from 'react-redux';
import HomePageTeamBlock from './homePageTeam/homePageTeamBlock';
import HomePageHeader from './homePageHeader';
import './homePage.scss';

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'homePage')
  }
  componentWillMount() {
    this.props.getBases();
    this.props.getUser();
  }


  render() {
    return (
      <div className = "home-page-wrapper">
        <HomePageHeader user={this.props.user}/>
        <div className = 'home-page-body'>
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