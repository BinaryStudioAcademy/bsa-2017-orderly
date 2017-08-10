import React, {Component} from 'react';
import {Form, Input, Button} from 'semantic-ui-react';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    }

    handleSignUp = (e) => {
        e.preventDefault();
        this.props.onSignUp(this.state);
    };

    handleInput = (_, field) => {
        this.setState({
            [field.name]: field.value,
        })
    };

    render() {
        return (
            <Form onSubmit={this.handleSignUp}>
                <Form.Group widths='equal'>
                    <Form.Field
                        onChange={this.handleInput}
                        control={Input}
                        name="firstName"
                        label='First name'
                        placeholder='First name'
                        required/>
                    <Form.Field
                        onChange={this.handleInput}
                        control={Input}
                        name="lastName"
                        label='Last name'
                        placeholder='Last name'
                        required/>
                </Form.Group>
                <Form.Field
                    control={Input}
                    onChange={this.handleInput}
                    name="email"
                    type="email"
                    label='Email'
                    placeholder='Email'
                    required/>
                <Form.Field
                    onChange={this.handleInput}
                    control={Input}
                    name="password"
                    type="password"
                    label='Password'
                    placeholder='Password'
                    required/>
                <Form.Field
                    fluid
                    control={Button}
                    content='Sign Up'
                    id='form__confirm'/>
            </Form>
        );
    }
}
