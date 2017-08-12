import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Container} from 'semantic-ui-react';
import * as viewActions from './viewActions';
import {GridHeader} from './grid/gridHeader';
import {GridContent} from './grid/gridContent';

class View extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid>
                <GridHeader/>
                <GridContent/>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(viewActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
