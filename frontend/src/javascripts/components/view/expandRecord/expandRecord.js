import React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import logoImage from '../../../../images/logo.png';
import './expandRecord.scss';
import TextLine from '../grid/fields/textLine/textLine';
import LongText from '../grid/fields/longText/longText';
import Number from '../grid/fields/number/number';
//import { Record } from '../grid/gridContent';

const Record = ({id, type, data, recordData}) => {
    let record = null;
    switch (type) {
        case 'longtext':
            record = <LongText id={id}
                               value={data}
                               selected={false}
                               active={true}
                               onSelect={recordData.selectRecordHandler}
                               onActivate={recordData.activateRecordHandler}
                               onKeyPress={recordData.keyPressRecordHandler}
                               //onChange={recordData.changeRecordHandler}
                               onBlurField={recordData.blurRecordHandler}
                               onBlurComponent={recordData.blurRecordComponentHandler}
                               onExpand={recordData.expandRecordHandler}
            >
            </LongText>;
            break;

        case 'number':
            record = <Number   id={id}
                               value={data}
                               selected={false}
                               active={true}
                               onSelect={recordData.selectRecordHandler}
                               onActivate={recordData.activateRecordHandler}
                               onKeyPress={recordData.keyPressSimpleRecordHandler}
                               //onChange={recordData.changeRecordHandler}
                               onBlurField={recordData.blurRecordHandler}
                               onBlurComponent={recordData.blurRecordComponentHandler}
            >
            </Number>;
            break;

        default:
            record = <TextLine id={id}
                               value={data}
                               selected={false}
                               active={true}
                               onSelect={recordData.selectRecordHandler}
                               onActivate={recordData.activateRecordHandler}
                               onKeyPress={recordData.keyPressSimpleRecordHandler}
                               //onChange={recordData.changeRecordHandler}
                               onBlurField={recordData.blurRecordHandler}
                               onBlurComponent={recordData.blurRecordComponentHandler}
            >
            </TextLine>;
    }

    return (
        <div className="field__item">
            {record}
        </div>
    );
};

//const ExpandRecord = ({recordId, record_data, comments, history, expandRecords, recordData, rowNumber}) => {
const ExpandRecord = ({record, fields, recordData, rowNumber}) => {
    return (
        <div className="row-control-container">
            {/*<Modal trigger={*/}
                {/*<Button className="expand-btn">*/}
                    {/*<Icon name='expand'/>*/}
                {/*</Button>}>*/}
                {/*<Modal.Header>Modal Header</Modal.Header>*/}
                {/*<Modal.Content image scrolling>*/}
                    {/*<Modal.Description className="modal">*/}
                        {/*<Header></Header>*/}
                        {/*{record.record_data.map((record, fieldIndex) => {*/}
                            {/*return (*/}
                                {/*<div key={record._id} className="modal__field-item">*/}
                                    {/*<div>*/}
                                        {/*{fields[fieldIndex].fieldName}*/}
                                    {/*</div>*/}
                                    {/*<Record id={record._id} type={fields[fieldIndex].type}*/}
                                            {/*data={record.data} recordData={recordData} />*/}
                                {/*</div>*/}
                            {/*)*/}
                        {/*})}*/}

                    {/*</Modal.Description>*/}

                    {/*<Image*/}
                        {/*size='medium'*/}
                        {/*src={logoImage}*/}
                        {/*wrapped*/}
                    {/*/>*/}
                {/*</Modal.Content>*/}
                {/*<Modal.Actions>*/}
                    {/*<Button primary>*/}
                        {/*Proceed <Icon name='right chevron' />*/}
                    {/*</Button>*/}
                {/*</Modal.Actions>*/}
            {/*</Modal>*/}
        </div>
    );
};

export default ExpandRecord;