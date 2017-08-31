import React, {Component} from 'react';
import {Icon, Input} from 'semantic-ui-react';
import './search.scss';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.keyDownHandler = this.keyDownHandler.bind(this);
    }

    keyDownHandler(event) {
        if (event.keyCode === 13) {
            this.props.onChangeSearchFoundIndex(this.props.searchFoundIndex + 1)
        }
        if (event.keyCode === 27) {
            this.props.onCloseSearch();
            event.target.focus = false;
        }
    }

    render() {
        return (
            <div id="search-block">
                <span>
                    <Input
                        size='small'
                        placeholder='Find in view'
                        onChange={(event) => this.props.onChangeSearch(event.target.value, this.props.currentTableId)}
                        onKeyDown={(event) => this.keyDownHandler(event)}
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
                    <Icon name='chevron up'
                          onClick={(event) => this.props.onChangeSearchFoundIndex(this.props.searchFoundIndex + 1)}
                    />}
                    {(this.props.searchMatchedRecordItemIdList.length !==0) &&
                    <Icon name='chevron down'
                          onClick={(event) => this.props.onChangeSearchFoundIndex(this.props.searchFoundIndex - 1)}
                    />}
                    <Icon name='close'
                          onClick={() => this.props.onCloseSearch()}
                    />
                </span>
            </div>
        );
    }
}