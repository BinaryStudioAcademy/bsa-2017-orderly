import React, {Component} from 'react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SignUpForm from './signUpForm';
import * as signUpActions from './signUpActions';
import {Container, Header, Button, Item} from 'semantic-ui-react';
import './signUp.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    handleSignUp = () => {
        this.props.signUp(this.props.signUpState);
    };

    handleChange = (field) => {
        this.props.changeSignUpForm({
                [field.name]: field.value,
            }
        )
    };

    render() {
        return (
            <Container text textAlign="center" id="sign-up__container">
                <Header as="h1" color="blue">Orderly</Header>
                <Container text id="sign-up__form">
                    <Item>Create an account</Item>
                    <SignUpForm onSignUp={this.handleSignUp} onChangeForm={this.handleChange}/>
                </Container>
                <Container id='sign-up__google'>
                    <Button fluid content='Sign up with Google'/>
                </Container>
                <Container textAlign="left" id='sign-up__footer'>
                    <p>Already have an account?</p>
                    <Link to="/login" id="footer__link">Sign In</Link>
                </Container>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        signUpState: state.signUp
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(signUpActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
