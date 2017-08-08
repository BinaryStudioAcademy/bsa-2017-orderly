import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import './signUp.scss';

class SignUp extends Component {
    render() {
        return (
            <Container textAlign="center">
                <Header as="h1" color="blue" className="sign-up__header">Orderly</Header>
            </Container>
        );
    }
}

export default SignUp;
