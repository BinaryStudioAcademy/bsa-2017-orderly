import React from 'react';
import UserProfileShort from '../../../../userProfile/userProfileShort/userProfileShort';
import { formatDateFromNow } from '../../../../../utils/utils';

const HistoryItem = ({historyItem, field}) => {

    return (
        <div className="record-history-item">
            <div className="record-history-header">
                <UserProfileShort user={historyItem.collaborator} showAvatar={true}/>, updated
            </div>
            <div className="record-history-field">{field.name || ''}</div>
            <div className="record-history-changed-from">{historyItem.changes.changed_from}</div>
            <div className="record-history-changed-to">{historyItem.changes.changed_to}</div>
            <div className="record-history-date">{formatDateFromNow(historyItem.date)}</div>
        </div>
    )
};

export default HistoryItem;