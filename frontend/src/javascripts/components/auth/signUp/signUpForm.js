import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Input, Button, Label} from 'semantic-ui-react';

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
        const errorMessage = this.props.stateFromReducer.message;
        const errorFirstName = this.props.stateErrors.firstName;
        const errorLastName = this.props.stateErrors.lastName;
        const errorEmail = this.props.stateErrors.email;
        const errorPassword = this.props.stateErrors.password;
        return (
            <Form onSubmit={this.handleSignUp} size="big">
                {errorMessage &&
                    <Label color="red" className="error">{errorMessage}</Label>
                }
                <Form.Group widths='equal' id='form__group'>
                    <div id='form__firstName'>
                    <Form.Field
                        onChange={this.handleInput}
                        className='group__field'
                        control={Input}
                        type='text'
                        name='firstName'
                        label='First name'
                        placeholder='First name'
                        fluid
                    />
                    {errorFirstName &&
                        <Label pointing color="red" className="error">{errorFirstName}</Label>
                    }
                    </div>
                    <div id='form__lastName'>
                    <Form.Field
                        onChange={this.handleInput}
                        className='group__field'
                        control={Input}
                        type='text'
                        name='lastName'
                        label='Last name'
                        placeholder='Last name'
                        fluid
                    />
                    {errorLastName &&
                        <Label pointing color="red" className="error">{errorLastName}</Label>
                    }
                    </div>
                </Form.Group>
                <Form.Field
                    control={Input}
                    onChange={this.handleInput}
                    className='form__field'
                    type='text'
                    name='email'
                    label='Email'
                    placeholder='Email'
                />
                {errorEmail &&
                    <Label pointing color="red" className="error">{errorEmail}</Label>
                }
                <Form.Field
                    onChange={this.handleInput}
                    control ={Input}
                    className='form__field'
                    type='password'
                    name='password'
                    label='Password'
                    placeholder='Password'
                />
                {errorPassword &&
                    <Label pointing color="red" className="error">{errorPassword}</Label>
                }
                <Form.Field
                    fluid
                    control={Button}
                    content='Sign Up'
                    id='form__confirm'
                    color='blue'
                    size='big'/>
            </Form>
        );
    }
}


function mapStateToProps(state) {
    return {
        stateFromReducer: state.signUp,
        stateErrors: state.signUp.errors
    };
}

export default connect(mapStateToProps)(SignUpForm);
