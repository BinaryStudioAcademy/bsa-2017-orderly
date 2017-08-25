import HomePageContainer from './homePageContainer';
import { connect } from 'react-redux';
import { getTeamsByUser, getBasesByTeam, toggleTeamPopup,
		setTeamModal, updateTeam, deleteTeam, addNewTeam } from './homePageActions';
import { getCurrentUser } from '../userProfile/userProfileActions';


const mapStateToProps = (state) => ({
    menu: state.baseStore.showMenuforBase,
    user: state.userProfile.user,
    avatar: state.userProfile.file,
	teams: state.baseStore.teams,
	teamPopupIsShow: state.baseStore.teamPopupIsShow,
	activeModal: state.baseStore.activeModal
  });

const mapDispatchToProps = {
	getUser: getCurrentUser,
	getTeamsByUser: getTeamsByUser,
	getBasesByTeam: getBasesByTeam,
	toggleTeamPopup: toggleTeamPopup,
	setTeamModal: setTeamModal,
	updateTeam: updateTeam,
	deleteTeam: deleteTeam,
	addNewTeam: addNewTeam
}

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageContainer);

export default HomePage;