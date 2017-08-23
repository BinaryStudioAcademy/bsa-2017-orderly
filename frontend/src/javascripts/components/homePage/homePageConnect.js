import HomePageContainer from './homePageContainer';
import { connect } from 'react-redux';
import { getAllBases } from './homePageActions';
import { getCurrentUser } from '../userProfile/userProfileActions';


const mapStateToProps = (state) => {
  return ({
    bases: state.baseStore.bases,
    menu: state.baseStore.showMenuforBase,
    user: state.userProfile.user,
    avatar: state.userProfile.file
  });
}

const mapDispatchToProps = {
   getBases: getAllBases,
   getUser: getCurrentUser,
}

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageContainer);

export default HomePage;