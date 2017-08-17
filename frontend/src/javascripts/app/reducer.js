import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import signUp from '../components/auth/signUp/signUpReducer';
import login from '../components/auth/login/loginReducer';
import dashboardReducer from '../components/dashboard/dashboardReducer';
import userProfile from '../components/userProfile/userProfileReducer';
import baseStore from '../components/homePage/homePageReducer';
import longTextReducer from '../components/view/grid/fields/longText/longTextReducer';
import textLineReducer from '../components/view/grid/fields/textLine/textLineReducer';
import numberReducer from '../components/view/grid/fields/number/numberReducer';

export default combineReducers({
    routing,
    signUp,
    login,
    dashboardReducer,
    userProfile,
    baseStore,
    longTextReducer,
    textLineReducer,
    numberReducer