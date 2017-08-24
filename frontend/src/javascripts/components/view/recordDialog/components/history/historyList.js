import React from 'react';
import HistoryItem from './historyItem';

const HistoryList = ({record, fields}) => {
    const fieldsById = {};
    fields.forEach((field) => fieldsById[field._id] = field);

    return (
        <div className="modal-history-list content scrolling">
            {record.history.map((historyItem) => {
                return <HistoryItem key={historyItem._id || ''}
                                    historyItem={historyItem}
                                    field={fieldsById[ historyItem.changes['field_id'] ] || {}}/>
            })}
        </div>
    );
};

export default HistoryList;