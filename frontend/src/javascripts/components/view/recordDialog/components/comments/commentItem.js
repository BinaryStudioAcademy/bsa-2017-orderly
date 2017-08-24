import React from 'react';
import { Label } from 'semantic-ui-react';
import UserProfileShort from '../../../../userProfile/userProfileShort/userProfileShort';
import { formatDateFromNow } from '../../../../../utils/utils';

const CommentItem = ({commentItem}) => {

    return (
        <div key={commentItem._id + ''} className="record-comment-item">
            <div className="record-comment-header">
                <UserProfileShort user={commentItem.collaborator} showAvatar={true}/>
            </div>
            <div className="comment-message">
                <Label pointing color="blue">
                    {commentItem.message}
                </Label>
            </div>
            <div className="record-comment-created">
                {formatDateFromNow(commentItem.created)}
            </div>
        </div>
    )
};

export default CommentItem;
