import React from 'react';
import CommentItem from './commentItem';

const CommentsList = ({record}) => {

    return (
        <div>
            {record.comments.length === 0 && <div>There are no comments for now.</div>}
            {record.comments.map((commentItem) => {
                return <CommentItem key={commentItem._id || ''}
                                    commentItem={commentItem}/>
            })}
        </div>
    )
};

export default CommentsList;