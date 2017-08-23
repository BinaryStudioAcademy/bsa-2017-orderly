import React, { Component } from 'react';
import { Input, Icon } from 'semantic-ui-react';
import UserProfileShort from '../../../../userProfile/userProfileShort/userProfileShort';

class CommentsForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.keyPressCommentHandler = this.keyPressCommentHandler.bind(this);
    }

    keyPressCommentHandler(userId, recordId, tableId, e) {
        if (e.charCode === 13) {
            this.props.onKeyPressComment(userId, recordId, tableId, e.target.value);
            e.target.value = '';
        }
    }

    render () {
        return (
            <div className="user-comment-info">
            <span>
                <UserProfileShort user={this.props.user} showAvatar={true}/>
            </span>
                <Input type='text'
                       icon='comment'
                    onKeyPress={(event) => this.keyPressCommentHandler(this.props.user._id,
                                                this.props.record._id, this.props.tableId, event)}
                />
            </div>
        )
    }
}

export default CommentsForm;