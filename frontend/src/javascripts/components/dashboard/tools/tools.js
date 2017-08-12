import React, { Component } from 'react';
import R from 'ramda';

import Header from './header/header';
import Tabs from './tabs/tabs';
import Menu from './menu/menu';
import Workflow from './workflow/workflow';

class Tools extends Component {
    constructor(props) {
        super(props);
    }

    // '5989fdcfe598fa16594f6276' - id test base
    componentWillMount() {
        this.props.getBaseCurrent(this.props.currentBase._id)
    }

    render() {
        return (
            <div>
                <Header base={this.props.base}/>
                <Tabs tables={this.props.tables}
                    current={this.props.current}
                    switchTableClick={this.props.switchTableClick}
                    addTableClick={this.props.addTableClick}/>
                <Menu/>
                <Workflow table={R.find((table) => table._id == this.props.current)(this.props.tables)}/>
            </div>
        );
    }
}

export default Tools;