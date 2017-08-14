import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import dashboardReducer from '../components/dashboard/dashboardReducer';
import userProfile from '../components/userProfile/userProfileReducer';
import baseStore from '../components/homePage/homePageReducer';

export default combineReducers({
    routing,
    dashboardReducer,
    userProfile,
    baseStore
});
