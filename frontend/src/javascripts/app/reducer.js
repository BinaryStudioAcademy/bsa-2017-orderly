import {combineReducers} from 'redux';
import { LOGOUT } from '../components/auth/logout/logoutActions';
import {routerReducer as routing} from 'react-router-redux';
import signUp from '../components/auth/signUp/signUpReducer';
import login from '../components/auth/login/loginReducer';
import dashboardReducer from '../components/dashboard/dashboardReducer';
import userProfile from '../components/userProfile/userProfileReducer';
import baseStore from '../components/homePage/homePageReducer';
import formView from '../components/view/form/formViewReducer';
import forgot from '../components/auth/forgot/forgotReducer';
import reset from '../components/auth/reset/resetReducer';

const appReducer = combineReducers({
	routing,
	signUp,
	login,
	dashboardReducer,
	userProfile,
	baseStore,
	formView,
	forgot,
	reset
})

const rootReducer = (state, action) => {
    if (action.type === LOGOUT) state = undefined
    return appReducer(state, action)
}

export default rootReducer