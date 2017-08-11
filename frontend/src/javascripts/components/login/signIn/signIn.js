import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import {Form, Label, Grid, Button} from 'semantic-ui-react';
import R from 'ramda';
import * as SignInActions from './signInActions';
import { signInService } from './signInService';
import SignInWithGoogleBtn from './components/signInWithGoogleBtn';
import './signIn.scss';

class SignIn extends React.Component {

    constructor(props, context) {
        super(props);
        this.props = props;

        // Redirect to homepage if user is logged in
        if (signInService.isLoggedIn()) {
            //context.router.push('/');
        }

        this.processForm = this.processForm.bind(this);
        this.changeUserData = this.changeUserData.bind(this);
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
            email: this.props.signIn.email,
            password: this.props.signIn.password
        });
    }

    render() {
        return (
            <Grid verticalAlign="middle" centered columns={1} textAlign="center" relaxed>
                <div className="ui grid">
                    <div className="column">
                        <h2>
                            <a href="#">
                                <div>
                                    Orderly
                                </div>
                            </a>
                        </h2>
                        <div id="con">
                            <h3>Sign in</h3>
                            <a href="#">Forgot password?</a>
                        </div>
                        <Grid.Row>
                            <Grid.Column>
                                <Form action="/" /*method="get"*/ size="big"
                                    onSubmit={this.processForm}
                                    onChange={this.changeUserData}>
                                    {(!R.isEmpty(this.props.signIn.errors) ||
                                      !this.props.signIn.success) &&
                                    <Label color="red" className="error">
                                        {this.props.signIn.message}
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
                                        {this.props.signIn.errors.email &&
                                        <Label pointing color="red" className="error">
                                            {this.props.signIn.errors.email}
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
                                        {this.props.signIn.errors.password &&
                                        <Label pointing color="red" className="error">
                                            {this.props.signIn.errors.password}
                                        </Label>}
                                    </div>
                                    <Button id="signInBtn" type="submit" color='orange' fluid>
                                        Sign in
                                    </Button>
                                    <SignInWithGoogleBtn/>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                        <div id="signIn-footer">
                            <p>Don’t have an account?</p>
                            <Link to={'/signup'}>Sign up for free</Link>
                        </div>
                    </div>
                </div>
            </Grid>
        );
    }
}

SignIn.contextTypes = {
    router: PropTypes.object.isRequired
};

SignIn.propTypes = {
    processForm: PropTypes.func.isRequired,
    changeUserData: PropTypes.func.isRequired,
    performLogin: PropTypes.func.isRequired,
    signIn: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        signIn: state.signIn
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, SignInActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);