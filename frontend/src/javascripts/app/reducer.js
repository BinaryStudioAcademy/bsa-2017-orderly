import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import dashboardReducer from '../components/dashboard/dashboardReducer';
import userProfile from '../components/userProfile/userProfileReducer';
import login from '../components/auth/login/loginReducer';

export default combineReducers({
    routing,
    dashboardReducer,
    login,
    userProfile
});
