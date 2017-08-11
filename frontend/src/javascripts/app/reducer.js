import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import signUp from '../components/auth/login/signUp/signUpReducer';
import signIn from '../components/auth/login/signIn/signInReducer';
import dashboardReducer from '../components/dashboard/dashboardReducer';
import userProfile from '../components/userProfile/userProfileReducer';
import contextMenu from '../components/contextMenu/contextMenuReducer';

export default combineReducers({
    routing,
    signUp,
    signIn,
    dashboardReducer,
    contextMenu,
    userProfile,
});
