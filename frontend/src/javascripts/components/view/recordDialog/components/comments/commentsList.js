import React from 'react';
import CommentItem from './commentItem';

const CommentsList = ({record}) => {

    return (
        <div>
            {record.comments.map((commentItem) => {
                return <CommentItem key={commentItem._id || ''}
                                    commentItem={commentItem}/>
            })}
        </div>
    )
};

export default CommentsList;