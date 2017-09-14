import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import {Form, Label, Grid, Button, Header} from 'semantic-ui-react';
import R from 'ramda';
import * as LoginActions from './loginActions';
import LoginWithGoogleBtn from './components/loginWithGoogleBtn';
import './login.scss';

class Login extends React.Component {
 
    constructor(props) {
        super(props);
        this.props = props;

        this.processForm = this.processForm.bind(this);
        this.changeUserData = this.changeUserData.bind(this);
    }

    componentWillMount(){
        // Redirect to homepage if user is logged in
        this.props.redirectLoggedInUser();
    }

    changeUserData(event) {
        const field = event.target.name;
        const user = {};
        user[field] = event.target.value;
        this.props.changeUserData(user);
    }

    processForm(e) {
        e.preventDefault();
        this.props.performLogin({
            email: this.props.login.email,
            password: this.props.login.password
        });
    }

    render() {
        return (
            <Grid verticalAlign="middle" centered columns={1} textAlign="center" relaxed>
                <div className="ui grid">
                    <div className="column">
                        <Header as="h1" color="blue">
                            <a href="#">
                                <div>
                                    Orderly
                                </div>
                            </a>
                        </Header>
                        <div id="form_heading">
                            <h3>Sign in</h3>
                            <Link to={'/forgot'}>Forgot password?</Link>
                        </div>
                        <Grid.Row>
                            <Grid.Column>
                                <Form action="/" size="big"
                                    onSubmit={this.processForm}
                                    onChange={this.changeUserData}>
                                    {(!R.isEmpty(this.props.login.errors) ||
                                      !this.props.login.success) &&
                                    <Label color="red" className="error">
                                        {this.props.login.message}
                                    </Label>}
                                    <div className="field input">
                                        <Form.Input
                                            required
                                            size='large'
                                            icon='mail'
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                        />
                                        {this.props.login.errors.email &&
                                        <Label pointing color="red" className="error">
                                            {this.props.login.errors.email}
                                        </Label>}
                                    </div>
                                    <div className="field input">
                                        <Form.Input
                                            required
                                            size='large'
                                            icon='lock'
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                        />
                                        {this.props.login.errors.password &&
                                        <Label pointing color="red" className="error">
                                            {this.props.login.errors.password}
                                        </Label>}
                                    </div>
                                    <Button id="loginBtn" type="submit" color='orange' fluid>
                                        Sign in
                                    </Button>
                                    <LoginWithGoogleBtn/>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                        <div id="login-footer">
                            <p>Don’t have an account?</p>
                            <Link to={'/signup'}>Sign up for free</Link>
                        </div>
                    </div>
                </div>
            </Grid>
        );
    }
}

Login.propTypes = {
    redirectLoggedInUser: PropTypes.func.isRequired,
    changeUserData: PropTypes.func.isRequired,
    performLogin: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LoginActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
