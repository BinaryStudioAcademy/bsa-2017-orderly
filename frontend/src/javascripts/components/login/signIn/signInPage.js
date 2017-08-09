import React, { PropTypes } from 'react';
import Auth from '../auth';
import SignInForm from './components/signInForm.js';
import fetch from 'isomorphic-fetch';

class SignInPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        const storedMessage = localStorage.getItem('successMessage');
        let successMessage = '';

        if (storedMessage) {
            successMessage = storedMessage;
            localStorage.removeItem('successMessage');
        }

        // set the initial component state
        this.state = {
            errors: {},
            successMessage,
            user: {
                email: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        // create a string for an HTTP body message
        const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `email=${email}&password=${password}`;
        const data = {email: email, password: password};


        // create an AJAX request
        /*fetch('http://localhost:2020/api/view/form', {
            method: 'GET'
        }).then(function(response) {
            debugger;
            console.log(response);
        });*/

        //fetch('http://localhost:2020/auth/login', {
        fetch('/auth/login', {
            method: 'POST',
            body: data,
        }).then(function(response) {
            if (response.status === 200) {
                // success

                // change the component-container state
                this.setState({
                    errors: {}
                });

                // save the token
                Auth.authenticateUser(response.json().token);

                // change the current URL to /
                this.context.router.replace('/');
            } else {
                // failure

                // change the component state
                const errors = response.json().errors ? response.json().errors : {};
                errors.summary = response.json().message;

                this.setState({
                    errors
                });
            }
        });

        /*const xhr = new XMLHttpRequest();
        xhr.open('post', 'http://localhost:2020/auth/login');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // success

                // change the component-container state
                this.setState({
                    errors: {}
                });

                // save the token
                Auth.authenticateUser(xhr.response.token);

                // change the current URL to /
                this.context.router.replace('/');
            } else {
                // failure

                // change the component state
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
        xhr.send(formData);*/
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    render() {
        return (
            <SignInForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                successMessage={this.state.successMessage}
                user={this.state.user}
            />
        );
    }
}

SignInPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default SignInPage;