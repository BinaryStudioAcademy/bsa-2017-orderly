import React, {Component} from 'react';
import {Icon, Button} from 'semantic-ui-react';
import {viewIcons} from '../../configuration/viewTypes';
import Search from '../Components/search';
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

    componentDidMount() {
        let _this = this;
        window.addEventListener("keydown",function (e) {
            if (e.ctrlKey && e.keyCode === 70) {
                e.preventDefault();
                _this.props.onToggleSearch();
            }
        });

        window.addEventListener("keydown",function (e) {
            if (e.keyCode === 114 && !_this.props.searchBlockOpen) {
                e.preventDefault();
                _this.props.onToggleSearch();
            }
        });
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
                </div>

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
                <div id="search-wrapper">
                    <span id="search-container">
                        {this.props.searchBlockOpen &&
                        <Search onChangeSearch={this.props.onChangeSearch}
                                currentTableId={this.props.currentTableId}
                                searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                                searchFoundIndex={this.props.searchFoundIndex}
                                onChangeSearchFoundIndex={this.props.onChangeSearchFoundIndex}
                                onToggleSearch={this.props.onToggleSearch}/>}
                    </span>
                    <Button
                        className="search-btn"
                        onClick={() => this.props.onToggleSearch()}>
                        <Icon name="search"/>
                    </Button>
                </div>
            </div>
        );
    }
}