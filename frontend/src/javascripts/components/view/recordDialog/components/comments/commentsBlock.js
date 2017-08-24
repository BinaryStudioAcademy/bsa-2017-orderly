// import React from 'react';
import React, { Component } from 'react';
import CommentsList from './commentsList';
import CommentsForm from './commentsForm';

class CommentsBlock extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        document.body.querySelector('.record-comment-item:last-child').scrollIntoView(false);
        document.body.querySelector('.record-history-item:last-child').scrollIntoView(false);
    }

    componentDidUpdate() {
        document.body.querySelector('.record-comment-item:last-child').scrollIntoView(false);
        document.body.querySelector('.record-history-item:last-child').scrollIntoView(false);
    }

    render () {
        return (
            <div className="comments-block content scrolling">
                <CommentsList record={this.props.record}/>
                <CommentsForm record={this.props.record}
                              user={this.props.user}
                              tableId={this.props.tableId}
                              onKeyPressComment={this.props.onKeyPressComment}/>
            </div>
        )
    }
}

export default CommentsBlock;