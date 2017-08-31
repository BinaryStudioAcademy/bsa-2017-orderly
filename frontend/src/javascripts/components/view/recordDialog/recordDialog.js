import React from 'react';
import { Modal, Header } from 'semantic-ui-react';
import './recordDialog.scss';
import TextLine from '../grid/fields/textLine/textLine';
import LongText from '../grid/fields/longText/longText';
import Number from '../grid/fields/number/number';
import HistoryList from './components/history/historyList';
import CommentsBlock from './components/comments/commentsBlock';

const Recordtem = ({id, type, data, recordData}) => {
    let record = null;
    switch (type) {
        case 'longtext':
            record = <LongText id={id}
                               value={data}
                               selected={false}
                               active={true}
                               onSelect={() => {}}
                               onActivate={() => {}}
                               onKeyPress={recordData.keyPressRecordHandler}
                               onBlurField={recordData.blurRecordHandler}
                               onBlurComponent={recordData.blurRecordComponentHandler}
                               autoFocus={false}
            >
            </LongText>;
            break;

        case 'number':
            record = <Number   id={id}
                               value={data}
                               selected={false}
                               active={true}
                               onSelect={() => {}}
                               onActivate={() => {}}
                               onKeyPress={recordData.keyPressSimpleRecordHandler}
                               onBlurField={recordData.blurRecordHandler}
                               onBlurComponent={recordData.blurRecordComponentHandler}
                               autoFocus={false}
            >
            </Number>;
            break;

        default:
            record = <TextLine id={id}
                               value={data}
                               selected={false}
                               active={true}
                               onSelect={() => {}}
                               onActivate={() => {}}
                               onKeyPress={recordData.keyPressSimpleRecordHandler}
                               onBlurField={recordData.blurRecordHandler}
                               onBlurComponent={recordData.blurRecordComponentHandler}
                               autoFocus={false}
            >
            </TextLine>;
    }

    return (
        <div className="field__item">
            {record}
        </div>
    );
};

const RecordDialog = ({record, fields, recordData, onOpenRecordDialog, onKeyPressComment, user, tableId}) => {
    return (
        <Modal
            open={true}
            onClose={(event) => onOpenRecordDialog('')}
            >
            <Modal.Header>Record details</Modal.Header>
            <Modal.Content image >
                <Modal.Description className="modal-fields-block content scrolling">
                    {record.record_data.map((recordItem, fieldIndex) => {
                        return (
                            <div key={recordItem._id} className="modal-field-item">
                                <div className="modal-field-name">
                                    {fields[fieldIndex].name}
                                </div>
                                <Recordtem id={recordItem._id} type={fields[fieldIndex].type}
                                        data={recordItem.data} recordData={recordData} />
                            </div>
                        )
                    })}
                </Modal.Description>
                <Modal.Description className="modal-sidebar-block">
                    <div className="modal-history">
                        <Header>History</Header>
                        <HistoryList record={record} fields={fields} />
                    </div>
                    <div className="modal-comments">
                        <Header>Comments</Header>
                        <CommentsBlock record={record}
                                       user={user}
                                       tableId={tableId}
                                       onKeyPressComment={onKeyPressComment}/>
                    </div>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
};

export default RecordDialog;