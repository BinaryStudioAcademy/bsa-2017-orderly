import React, {Component} from 'react';
import {Container, Header, Form, Input, Button, Item} from 'semantic-ui-react';
import './signUp.scss';

class SignUp extends Component {
    render() {
        return (
            <Container text textAlign="center" id="sign-up__container">
                <Header as="h1" color="blue">Orderly</Header>
                <Container text id="sign-up__form">
                    <Item>Create an account</Item>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field control={Input} label='First name' placeholder='First name' />
                            <Form.Field control={Input} label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.Field control={Input} label='Email' placeholder='Email' />
                        <Form.Field control={Input} label='Password' placeholder='Password' />
                        <Form.Field fluid control={Button} content='Sign Up' id='form__confirm'/>
                    </Form>
                </Container>
                <Container id='sign-up__google'>
                    <Button fluid content='Sign up with Google'/>
                </Container>
                <Container textAlign="left" id='sign-up__footer'>
                    <p>Already have an account?</p>
                    <a href="/signin">Sign In</a>
                </Container>
            </Container>
        );
    }
}

export default SignUp;
