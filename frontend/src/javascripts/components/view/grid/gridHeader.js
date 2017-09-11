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
    }

    componentDidMount() {
        let _this = this;
        window.addEventListener("keydown",function (e) {
            if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
                e.preventDefault();
                _this.props.onToggleSearch();
            }
        });
    }

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
                        <FilterMenu
                            currentTable={this.props.currentTable}
                            currentViewType={this.props.currentViewType}
                            filterRecords={this.props.filterRecords}
                            removeFilter={this.props.removeFilter}
                            addFilter={this.props.addFilter}
                            updateFilter={this.props.updateFilter}
                            removeAllFilters={this.props.removeAllFilters}
                        />
                        <Button basic>
                            <Icon name='browser'/>
                            <span className="menu__text">Group</span>
                        </Button>
                        <SortMenu
                            currentTable={this.props.currentTable}
                            sortRecords={this.props.sortRecords}
                        />
                        <Button basic icon='external'/>
                        <ExtraMenu
                            currentTableId={this.props.currentTable._id}
                            tables={this.props.tables}
                            deleteView={this.props.deleteView}
                            viewsCount={this.props.viewsCount}
                        />
                    </Button.Group>
                </div>
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
