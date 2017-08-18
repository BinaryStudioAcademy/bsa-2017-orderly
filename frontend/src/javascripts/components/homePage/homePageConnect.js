import HomePageContainer from './homePageContainer';
import { connect } from 'react-redux';
import { getAllBases } from './homePageActions';


const mapStateToProps = (state) => {
  return ({
    bases: state.baseStore.bases,
    menu: state.baseStore.showMenuforBase,
  });
}

const mapDispatchToProps = {
   getBases: getAllBases
}

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageContainer);

export default HomePage;