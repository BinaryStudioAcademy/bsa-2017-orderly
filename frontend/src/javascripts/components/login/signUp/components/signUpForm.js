import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {Form, Message, Grid, Button, Input} from 'semantic-ui-react';

const SignUpForm = ({
                        onSubmit,
                        onChange,
                        errors,
                        user,
                    }) => (
    <div className="container">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="heading">Sign Up</h2>

            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
                <Input
                    placeholder="First name"
                    name="firstName"
                    errorText={errors.firstName}
                    onChange={onChange}
                    value={user.firstName}
                />
            </div>

            <div className="field-line">
                <Input
                    placeholder="Last name"
                    name="lastName"
                    errorText={errors.lastName}
                    onChange={onChange}
                    value={user.lastName}
                />
            </div>

            <div className="field-line">
                <Input
                    placeholder="Email"
                    name="email"
                    errorText={errors.email}
                    onChange={onChange}
                    value={user.email}
                />
            </div>

            <div className="field-line">
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    errorText={errors.password}
                    value={user.password}
                />
            </div>

            <div className="button-line">
                <Button type="submit" label="Create New Account" primary />
            </div>

            <Message>Already have an account? <Link to={'/login'}>Log in</Link></Message>
        </form>
    </div>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;