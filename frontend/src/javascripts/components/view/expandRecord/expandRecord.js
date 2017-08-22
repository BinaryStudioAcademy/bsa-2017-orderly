import React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import logoImage from '../../../../images/logo.png';
import './expandRecord.scss';
import TextLine from '../grid/fields/textLine/textLine';
import LongText from '../grid/fields/longText/longText';
import Number from '../grid/fields/number/number';

const Record = ({id, type, data, recordData}) => {
    let record = null;
    switch (type) {
        case 'longtext':
            record = <LongText id={id/* + '-expand'*/}
                               value={data}
                               selected={false}
                               active={true}
                               onSelect={() => {}}
                               onActivate={() => {}}
                               onKeyPress={recordData.keyPressRecordHandler}
                               onBlurField={recordData.blurRecordHandler}
                               onBlurComponent={recordData.blurRecordComponentHandler}
                               onExpand={recordData.expandRecordHandler}
                               autoFocus={false}
            >
            </LongText>;
            break;

        case 'number':
            record = <Number   id={id/* + '-expand'*/}
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
            record = <TextLine id={id/* + '-expand'*/}
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

const ExpandRecord = ({record, fields, recordData, onExpandRecord}) => {
    return (
        <Modal
            open={true}
            onClose={(event) => onExpandRecord('')}
            >
            <Modal.Header>Modal Header</Modal.Header>
            <Modal.Content image scrolling>
                <Modal.Description className="modal">
                    {record.record_data.map((recordItem, fieldIndex) => {
                        return (
                            <div key={recordItem._id} className="modal__field-item">
                                <div>
                                    {fields[fieldIndex].name}
                                </div>
                                <Record id={recordItem._id} type={fields[fieldIndex].type}
                                        data={recordItem.data} recordData={recordData} />
                            </div>
                        )
                    })}
                </Modal.Description>

                <Image
                    size='medium'
                    src={logoImage}
                    wrapped
                />
            </Modal.Content>
        </Modal>
    );
};

export default ExpandRecord;
