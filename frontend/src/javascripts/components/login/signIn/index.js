import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import PropTypes from 'prop-types';
// import {LOGIN_AUTH, LOGIN_AUTH_PENDING} from './signInActions';

//import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import * as signIn from './signIn';

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(signIn.reducer);

const SignIn = () => (
    <Provider store={store}>
    <signIn.SignInComponent/>
    </Provider>
);

sagaMiddleware.run(signIn.saga);

//ReactDOM.render(<Root/>, document.getElementById('root'));
export default SignIn;

/*
import SignInComponent  from './signIn';
import * as actions from './signInActions';
import { getFormattedTime, getStatus } from './signInReducer';

export reducer from './signInReducer';
export saga from './signInSaga';

export const View = connect(
    state => ({
        time: getFormattedTime(state),
        status: getStatus(state)
    }),
    actions
)(SignInComponent);

class Login extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired
    };

    render () {
        const {login, errors} = this.props;
        const props = {login, errors};
        return <SignInComponent {...props}/>
    }
}

function mapStateToProps (state) {
    // const {errors} = state.me.auth
    return {
        // errors
    }
}

function mapDispatchToProps (dispatch) {
    return {
        // login: async data => {
        //     dispatch({type: LOGIN_AUTH_PENDING})
        //     const result = await LOGIN_AUTH(data)
        //     return dispatch(result)
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
*/