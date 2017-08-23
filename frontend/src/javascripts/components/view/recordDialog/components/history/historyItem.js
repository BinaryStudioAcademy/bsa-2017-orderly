import React from 'react';
import UserProfileShort from '../../../../userProfile/userProfileShort/userProfileShort';

const HistoryItem = ({historyItem, field}) => {

    return (
        <div className="record-history-item">
                <div><UserProfileShort user={historyItem.collaborator} showAvatar='true'/>
                    <span> changed </span>
                </div>
                <span>  "{field.name || ''}" field from </span>
                <span className="record-history-changed-from">"{historyItem.changes.changed_from}"</span> to
                <span className="record-history-changed-to">"{historyItem.changes.changed_to}"</span>
        </div>
    )
};

export default HistoryItem;