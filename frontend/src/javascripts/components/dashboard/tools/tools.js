import React, { Component } from 'react';
import R from 'ramda';
import { Button } from 'semantic-ui-react';

import Header from './header/header';
import Tabs from './tabs/tabs';
import Menu from './menu/menu';
import Workflow from './workflow/workflow';

// const tools = ({tables, current, addTableClick, switchTableClick, getAllTables}) => (
//     <div>
//         <Button onClick={() => getAllTables()}>get tables</Button>
//         <Header/>
//         <Tabs tables={tables}
//             current={current}
//             switchTableClick={switchTableClick}
//             addTableClick={addTableClick}/>
//         <Menu/>
//         <Workflow table={R.find((table) => table._id == current)(tables)}/>
//     </div>
// );

class Tools extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getBaseById('5989fdcfe598fa16594f6276')     //todo remove hardcode
        this.props.getAllTables();
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