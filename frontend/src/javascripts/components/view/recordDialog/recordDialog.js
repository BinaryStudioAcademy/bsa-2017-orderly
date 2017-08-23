import React from 'react';
import { Modal, Header } from 'semantic-ui-react';
import './recordDialog.scss';
import TextLine from '../grid/fields/textLine/textLine';
import LongText from '../grid/fields/longText/longText';
import Number from '../grid/fields/number/number';
import HistoryList from './components/history/historyList';
import CommentsBlock from './components/comments/commentsBlock';

const Record = ({id, type, data, recordData}) => {
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
            <Modal.Header>Modal Header</Modal.Header>
            <Modal.Content image scrolling>
                <Modal.Description className="modal-fields-block">
                    {record.record_data.map((recordItem, fieldIndex) => {
                        return (
                            <div key={recordItem._id} className="modal-field-item">
                                <div>
                                    {fields[fieldIndex].name}
                                </div>
                                <Record id={recordItem._id} type={fields[fieldIndex].type}
                                        data={recordItem.data} recordData={recordData} />
                            </div>
                        )
                    })}
                </Modal.Description>
                <Modal.Description>
                    <Header>History</Header>
                    <HistoryList record={record} fields={fields} />
                    <Header>Comments</Header>
                    <CommentsBlock record={record}
                                   user={user}
                                   tableId={tableId}
                                   onKeyPressComment={onKeyPressComment}/>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
};

export default RecordDialog;