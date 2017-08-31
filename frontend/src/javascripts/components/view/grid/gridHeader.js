import React, {Component} from 'react';
import {Icon, Button} from 'semantic-ui-react';
import {viewIcons} from '../../configuration/viewTypes';
import FilterMenu from './headerMenu/filterMenu';
import SortMenu from './headerMenu/sortMenu';
import ExtraMenu from './headerMenu/extraMenu';
import './gridHeader.scss';

export default class GridHeader extends Component{
    constructor(props) {
        super(props);

        this.state = {
            activeMenu: null,
        };
    }

    toggleMenu = (menu) => {
        if (this.state.activeMenu === menu) {
            this.setState({activeMenu: null});
        } else {
            this.setState({activeMenu: menu});
        }
    };

    render() {
        return (
            <div className="view__header">
                <div id="header__view-type">
                    <Icon name={viewIcons.grid} id="view-type__icon" size="large"/>
                    <span id="view-type__name">Grid View</span>
                </div>
                <Button.Group>
                    <Button basic>
                        <Icon name='hide'/>
                        <span className="menu__text">Hide fields</span>
                    </Button>
                    <Button basic onClick={() => this.toggleMenu('filter')}>
                        <Icon name='filter'/>
                        <span className="menu__text">Filter</span>
                    </Button>
                    <Button basic>
                        <Icon name='browser'/>
                        <span className="menu__text">Group</span>
                    </Button>
                    <Button basic onClick={() => this.toggleMenu('sort')}>
                        <Icon name='sort content ascending'/>
                        <span className="menu__text">Sort</span>
                    </Button>
                    <Button basic icon='external'/>
                    <Button basic icon='ellipsis horizontal' onClick={() => this.toggleMenu('extra')}/>
                </Button.Group>
                <Icon name="search" id="header__search" size='large'/>
                <SortMenu
                    isActive={this.state.activeMenu === 'sort'}
                    currentTable={this.props.currentTable}
                    sortRecords={this.props.sortRecords}
                />
                <FilterMenu
                    isActive={this.state.activeMenu === 'filter'}
                    currentTable={this.props.currentTable}
                    filterRecords={this.props.filterRecords}
                    removeFilter={this.props.removeFilter}
                />
                <ExtraMenu
                    currentTableId={this.props.currentTable._id}
                    tables={this.props.tables}
                    isActive={this.state.activeMenu === 'extra'}
                />
            </div>
        );
    }
}
