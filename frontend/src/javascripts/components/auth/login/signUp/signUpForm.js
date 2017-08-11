import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Input, Button} from 'semantic-ui-react';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
    }

    handleSignUp = (e) => {
        e.preventDefault();
        this.props.onSignUp(this.props);
    };

    handleInput = (_, field) => {
        this.props.onChangeForm(field)
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
                    minLength="6"
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


function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

export default connect(mapStateToProps)(SignUpForm);
