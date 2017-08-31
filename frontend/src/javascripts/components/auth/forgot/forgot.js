import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import {Form, Grid, Button, Header, Label} from 'semantic-ui-react';
import * as ForgotActions from './forgotActions';
import './forgot.scss';

class Forgot extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.processForm = this.processForm.bind(this);
    }

    processForm(e) {
        e.preventDefault();
        this.props.performForgot(e.target.childNodes[0].childNodes[0].childNodes[0].childNodes[0].value);
    }

    render() {
        return (
            <Grid verticalAlign="middle" centered columns={1} textAlign="center" relaxed>
                <div className="ui grid">
                    <div className="column">
                        <Header as="h1" color="blue">
                            <a href="#">
                                <div>
                                    Orderly
                                </div>
                            </a>
                        </Header>
                        <p id="form_desription">
                            Enter your email address and we’ll send you a link to reset your password.
                        </p>
                        <Grid.Row>
                            <Grid.Column>
                                <Form action="/" size="big"
                                      onSubmit={this.processForm}>
                                    <div className="field input">
                                        <Form.Input
                                            required
                                            size='large'
                                            icon='mail'
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                        />
                                        {this.props.forgot.error &&
                                        <Label pointing color="red" className="error">
                                            {this.props.forgot.error}
                                        </Label>}
                                        {this.props.forgot.message &&
                                        <Label color="green" className="success" size="large">
                                            {this.props.forgot.message}
                                        </Label>}
                                    </div>
                                    <Button id="forgotBtn" type="submit" color='orange' fluid>
                                        Send password reset link
                                    </Button>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                        <div id="forgot-footer">
                            <Link to={'/signup'}>Back to Login page</Link>
                        </div>
                    </div>
                </div>
            </Grid>
        );
    }
}

Forgot.propTypes = {
    performForgot: PropTypes.func.isRequired,
    forgot: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        forgot: state.forgot
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, ForgotActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);
