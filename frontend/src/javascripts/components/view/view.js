import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewActions from './viewActions';
import {GridHeader} from './grid/gridHeader';
import {GridContent} from './grid/gridContent';

class View extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GridHeader/>
                <GridContent/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dashboardState: state.dashboardReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(viewActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
