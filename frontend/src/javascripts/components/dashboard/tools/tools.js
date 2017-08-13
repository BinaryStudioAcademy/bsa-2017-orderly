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

    // '5989fdcfe598fa16594f6276/598b6682e21e1c0a2146db94' - id test base
    componentWillMount() {
        this.props.getBaseCurrent(this.props.baseId, this.props.currentTableId);
    }

    render() {
        return (
            <div>
                <Header base={this.props.base}/>
                <Tabs base={this.props.base}
                    tables={this.props.tables}
                    currentTableId={this.props.currentTableId}
                    switchTableClick={this.props.switchTableClick}
                    addTableClick={this.props.addTableClick}/>
                <Menu/>
                <Workflow table={R.find((table) => table._id == this.props.currentTableId)(this.props.tables)}/>
            </div>
        );
    }
}

export default Tools;