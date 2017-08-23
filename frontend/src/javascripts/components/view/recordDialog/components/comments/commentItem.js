import React from 'react';
import { Label } from 'semantic-ui-react';
import UserProfileShort from '../../../../userProfile/userProfileShort/userProfileShort';

const CommentItem = ({commentItem}) => {

    return (
        <div key={commentItem._id + ''} className="record-comment-item">
            <div className="record-comment-user">
                <UserProfileShort user={commentItem.collaborator}/>
            </div>
            <div className="comment-message">
                <Label pointing color="blue">
                    {commentItem.message}
                </Label>
            </div>
        </div>
    )
};

export default CommentItem;
