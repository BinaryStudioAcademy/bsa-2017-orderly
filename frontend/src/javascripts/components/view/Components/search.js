import React, {Component} from 'react';
import {Icon, Input} from 'semantic-ui-react';
import './search.scss';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.keyDownHandler = this.keyDownHandler.bind(this);
    }

    keyDownHandler(event) {
        if (event.keyCode === 13 || event.keyCode === 114) {
            event.preventDefault();
            this.props.onChangeSearchFoundIndex(this.props.searchFoundIndex + 1)
        }
        if (event.keyCode === 27) {
            this.props.onToggleSearch();
            event.target.focus = false;
        }
    }

    render() {
        return (
            <div id="search-block">
                <span id="search-icons">
                    <Input
                        size="small"
                        placeholder="Find in view"
                        onChange={(event) => this.props.onChangeSearch(event.target.value, this.props.currentTableId)}
                        onKeyDown={(event) => this.keyDownHandler(event)}
                        autoFocus="true"
                    />
                </span>
                <span>
                    {(this.props.searchMatchedRecordItemIdList.length !==0) &&
                    <span className="found-counts">
                        {this.props.searchFoundIndex + 1}
                         &nbsp; of &nbsp;
                        {this.props.searchMatchedRecordItemIdList.length}
                    </span>}
                    {(this.props.searchMatchedRecordItemIdList.length !==0) &&
                    <Icon name="chevron down" size="small"
                          onClick={(event) => this.props.onChangeSearchFoundIndex(this.props.searchFoundIndex + 1)}
                    />}
                    {(this.props.searchMatchedRecordItemIdList.length !==0) &&
                    <Icon name="chevron up" size="small"
                          onClick={(event) => this.props.onChangeSearchFoundIndex(this.props.searchFoundIndex - 1)}
                    />}
                    <Icon name="close" size="small"
                          onClick={() => this.props.onToggleSearch()}
                    />
                </span>
            </div>
        );
    }
}