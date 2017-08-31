import React, {Component} from 'react';
import {Icon, Button, Input} from 'semantic-ui-react';
import {viewIcons} from '../../configuration/viewTypes';
import Search from '../Components/search';
import './gridHeader.scss';

export default class GridHeader extends Component{
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
                        <Button basic>
                            <Icon name='filter'/>
                            <span className="menu__text">Filter</span>
                        </Button>
                        <Button basic>
                            <Icon name='browser'/>
                            <span className="menu__text">Group</span>
                        </Button>
                        <Button basic>
                            <Icon name='sort content ascending'/>
                            <span className="menu__text">Sort</span>
                        </Button>
                        <Button basic icon='external'/>
                        <Button basic icon='ellipsis horizontal'/>
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
//icon={{name: 'search', link: true}}