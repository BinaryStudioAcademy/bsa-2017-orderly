import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import {Form, Grid, Button, Header, Label} from 'semantic-ui-react';
import * as ResetActions from './resetActions';
import './reset.scss';

class Reset extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.processForm = this.processForm.bind(this);
    }

    processForm(e) {
        e.preventDefault();
        this.props.performReset(this.props.token, e.target.childNodes[0].childNodes[0].childNodes[0].childNodes[0].value);
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
                        <div id="form_desription">
                            <h3>Enter new password:</h3>
                        </div>
                        <Grid.Row>
                            <Grid.Column>
                                <Form action="/" size="big" className="resetForm"
                                      onSubmit={this.processForm}>
                                    <div className="field input">
                                        <Form.Input
                                            required
                                            size='large'
                                            icon='lock'
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                        />
                                        {this.props.reset.error &&
                                        <Label pointing color="red" className="error">
                                            {this.props.reset.error}
                                        </Label>}
                                    </div>
                                    <Button id="resetBtn" type="submit" color='orange' fluid>
                                        Change pasword
                                    </Button>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </div>
                </div>
            </Grid>
        );
    }
}

Reset.propTypes = {
    performReset: PropTypes.func.isRequired,
    reset: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        reset: state.reset,
        token: ownProps.params.token
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, ResetActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
