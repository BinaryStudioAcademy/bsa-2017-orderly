import React from 'react';
import CommentsList from './commentsList';
import CommentsForm from './commentsForm';

const CommentsBlock = ({record, user, tableId, onKeyPressComment}) => {

    return (
        <div className="comments-block">
            <CommentsList record={record}/>
            <CommentsForm record={record}
                          user={user}
                          tableId={tableId}
                          onKeyPressComment={onKeyPressComment}/>
        </div>
    )
};

export default CommentsBlock;