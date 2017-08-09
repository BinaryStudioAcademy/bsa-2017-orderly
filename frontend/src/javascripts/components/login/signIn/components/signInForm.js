import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {Form, Label, Grid, Button, Header, Container, Segment} from 'semantic-ui-react';
import R from 'ramda';
import ErrorMessage from './errorMessage';
import SignInBtn from './signInBtn';
import SignInWithGoogleBtn from './signInWithGoogleBtn';
import '../signIn.scss';

const SignInForm = ({
                       onSubmit,
                       onChange,
                       errors,
                       successMessage,
                       user
                   }) => (
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
                            <Form action="/" /*method="get"*/ onSubmit={onSubmit} size="big">

                                {successMessage && <p className="success-message">{successMessage}</p>}
                                {errors.summary && <p className="error-message">{errors.summary}</p>}

                                <div className="field input">
                                    <Form.Input
                                        required
                                        size='large'
                                        icon='mail'
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        error={errors.email}
                                        onChange={onChange}
                                        value={user.email}
                                    />
                                    {errors.email && <Label pointing color="red" className="error">{errors.email}</Label>}
                                </div>
                                <div className="field input">
                                    <Form.Input
                                        required
                                        size='large'
                                        icon='lock'
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        onChange={onChange}
                                        error={errors.password}
                                        value={user.password}
                                    />
                                    {errors.password && <Label pointing color="red" className="error">{errors.password}</Label>}
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

SignInForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

export default SignInForm;

/*
export default class SignInForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired
    }

    handleSubmit (e) {
        e.preventDefault();
        //const {login} = this.props;
        const {email, password} = this.state;
        //login({email, password});




        // create a string for an HTTP body message

        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/login');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // success

                // change the component-container state
                this.setState({
                    errors: {}
                });

                console.log('The form is valid');
            } else {
                // failure

                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
        xhr.send({email, password});
    }

    handleChange (e, {name, value}) {
        this.setState({
            [name]: value
        })
    }

    render () {
        const {email, password} = this.state;
        // Error from server
        const {errors} = this.props;
        const loginFormProps = {error: !R.isEmpty(errors)};

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
                                <Form action="/" method="get" size="big">
                                    <div className="field input">
                                        <Form.Input
                                            required
                                            size='large'
                                            icon='mail small'
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="field input">
                                        <Form.Input
                                            required
                                            size='large'
                                            icon='lock small'
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <SignInBtn/>
                                    <SignInWithGoogleBtn/>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>

                        <div id="signIn-footer">
                            <p>Don’t have an account?</p>
                            <a href="#">Sign up for free</a>
                        </div>
                    </div>
                </div>
            </Grid>
        )
    }
}

//<div className="ui segment">
//</div>
//<ErrorMessage/>

SignInForm.propTypes = {
    signIn: React.PropTypes.func.isRequired
    //signIn: PropTypes.string.isRequired
}
*/