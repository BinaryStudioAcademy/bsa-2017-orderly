import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import dashboardReducer from '../components/dashboard/dashboardReducer';
import userProfile from '../components/userProfile/userProfileReducer';
import signIn from '../components/login/signIn/signInReducer';

export default combineReducers({
    routing,
    dashboardReducer,
    signIn,
    userProfile
});
