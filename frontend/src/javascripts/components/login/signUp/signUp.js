import React, {Component} from 'react';
import {Container, Header, Segment} from 'semantic-ui-react';
import './signUp.scss';

class SignUp extends Component {
    render() {
        return (
            <Container textAlign="center">
                <Header as="h1" color="blue">Orderly</Header>
                <Container className="sign-up_form">
                    <Segment basic>Create account</Segment>
                </Container>
            </Container>
        );
    }
}

export default SignUp;
