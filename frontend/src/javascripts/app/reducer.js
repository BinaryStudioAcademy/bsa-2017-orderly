import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import dashboardReducer from '../components/dashboard/dashboardReducer';

export default combineReducers({
    routing,
    dashboardReducer
});
