import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewActions from './viewActions';
import {Grid} from './grid/grid';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: '',
        };
    }

    viewSelector(listOfViews) {
        const activeView = listOfViews.filter((view) => view.isActive);
        switch (activeView.type) {
        case 'grid':
            return <Grid/>;
        default:
            return <Grid/>;
        }
    }

    //Need to receive list of views from outer reducer
    render() {
        return this.viewSelector([{isActive: true, type: 'grid'}]);
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
