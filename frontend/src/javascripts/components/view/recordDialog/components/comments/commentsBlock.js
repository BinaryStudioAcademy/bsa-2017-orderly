// import React from 'react';
import React, { Component } from 'react';
import CommentsList from './commentsList';

class CommentsBlock extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        const lastComment = document.body.querySelector('.record-comment-item:last-child');
        if (lastComment) {
            lastComment.scrollIntoView(false);
        }
        const lastHistoryItem = document.body.querySelector('.record-history-item:last-child')
        if (lastHistoryItem) {
            lastHistoryItem.scrollIntoView(false);
        }
    }

    componentDidUpdate() {
        const lastComment = document.body.querySelector('.record-comment-item:last-child');
        if (lastComment) {
            lastComment.scrollIntoView(false);
        }
        const lastHistoryItem = document.body.querySelector('.record-history-item:last-child')
        if (lastHistoryItem) {
            lastHistoryItem.scrollIntoView(false);
        }
    }

    render () {
        return (
            <div className="comments-block content scrolling">
                <CommentsList record={this.props.record}/>
            </div>
        )
    }
}

export default CommentsBlock;