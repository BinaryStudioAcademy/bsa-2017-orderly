import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import userProfile from '../components/userProfile/userProfileReducer';

export default combineReducers({
    routing,
    userProfile
});
