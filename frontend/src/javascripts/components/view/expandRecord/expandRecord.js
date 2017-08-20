import React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import logoImage from '../../../../images/logo.png';
import './expandRecord.scss';
import TextLine from '../grid/fields/textLine/textLine';
import LongText from '../grid/fields/longText/longText';
import Number from '../grid/fields/number/number';
//import { Record } from '../grid/gridContent';

const Record = ({id, type, data, fieldEvents}) => {
    let record = null;
    switch (type) {
        case 'longtext':
            record = <LongText id={id}
                               value={data}
                               selected={fieldEvents.isRecordSelected(id)}
                               active={fieldEvents.activateRecordHandler}
                               onSelect={fieldEvents.selectRecordHandler}
                               onActivate={fieldEvents.activateRecordHandler}
                               onKeyDown={fieldEvents.keyDownRecordHandler}
                               onChange={fieldEvents.changeRecordHandler}
                               onBlurField={fieldEvents.blurRecordHandler}
                               onBlurComponent={fieldEvents.blurRecordComponentHandler}
                               onExpand={fieldEvents.expandRecordHandler}
            >
            </LongText>;
            break;

        case 'number':
            record = <Number   id={id}
                               value={data}
                               selected={fieldEvents.isRecordSelected(id)}
                               active={fieldEvents.activateRecordHandler}
                               onSelect={fieldEvents.selectRecordHandler}
                               onActivate={fieldEvents.activateRecordHandler}
                               onKeyDown={fieldEvents.keyDownSimpleRecordHandler}
                               onChange={fieldEvents.changeRecordHandler}
                               onBlurField={fieldEvents.blurRecordHandler}
                               onBlurComponent={fieldEvents.blurRecordComponentHandler}
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
                               onKeyDown={() => {}}
                               onChange={fieldEvents.changeRecordHandler}
                               onBlurField={fieldEvents.blurRecordHandler}
                               onBlurComponent={fieldEvents.blurRecordComponentHandler}
            >
            </TextLine>;
    }

    return (
        <div className="field__item">
            {record}
        </div>
    );
};

const ExpandRecord = ({recordId, record_data, comments, history,
                          recordRecords, fieldEvents, rowNumber}) => {
    return (
        <div className="row-control-container">
            <Modal trigger={
                <Button className="expand-btn">
                    <Icon name='expand'/>
                </Button>}>
                <Modal.Header>Modal Header</Modal.Header>
                <Modal.Content image scrolling>
                    <Modal.Description className="modal">
                        <Header></Header>
                        {record_data.map((record) => {
                            return (
                                <div key={record._id} className="modal__field-item">
                                    <div>
                                        {record.fieldName}
                                    </div>
                                    <Record id={record._id} type={record.type}
                                            data={record.data} fieldEvents={fieldEvents} />
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
                <Modal.Actions>
                    <Button primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
};

export default ExpandRecord;