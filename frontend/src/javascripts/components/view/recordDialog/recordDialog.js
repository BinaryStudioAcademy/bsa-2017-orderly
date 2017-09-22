import React, { Component } from 'react';
import { Modal, Header, Icon, Accordion } from 'semantic-ui-react';
import CommentsForm from './components/comments/commentsForm';
import './recordDialog.scss';
import TextLine from '../grid/fields/textLine/textLine';
import LongText from '../grid/fields/longText/longText';
import CurrencyField from '../grid/fields/currency/currency';
import Number from '../grid/fields/number/number';
import AutoNumber from '../grid/fields/autoNumber/autoNumber';
import Url from '../grid/fields/url/url';
import DateField from '../grid/fields/date/date';
import SingleSelect from '../grid/fields/singleSelect/singleSelect';
import Email from '../grid/fields/email/email';
import Percent from '../grid/fields/percent/percent';
import Phone from '../grid/fields/phone/phone';
import Attachment from '../grid/fields/attachment/attachment';
import MultipleSelect from '../grid/fields/multiple/multiple';
import CheckboxItem from '../grid/fields/checkbox/checkbox';
import HistoryList from './components/history/historyList';
import CommentsBlock from './components/comments/commentsBlock';
import {fieldIcons, fieldNames} from "../../configuration/fieldTypes";

export const Recordtem = ({id, type, data, tableId, recordData, uploadAttachment, deleteFile, currentField, recordIdx}) => {
    const fieldPayload = {
        id: id,
        value: data,
        tableId: tableId,
        currentField: currentField,
        uploadAttachment: uploadAttachment,
        deleteFile: deleteFile,
        selected: false,
        active: true,
        onActivate: () => {},
        onKeyPress: recordData.keyPressSimpleRecordHandler,
        onBlurField: recordData.blurRecordHandler,
        onBlurComponent: recordData.blurRecordComponentHandler,
        onChangeCheckbox: recordData.changeCheckboxHandler,
        autoFocus: false,
	    recordIdx: recordIdx,
        onMouseDownRecordItem: () => {},
        onMouseOverRecordItem: () => {}
    };
    let record = null;
    switch (type) {
        case 'longtext':
            const fieldPayloadLongtext = {...fieldPayload, ...{onKeyPress: recordData.keyPressRecordHandler} };
            record = <LongText {...fieldPayloadLongtext}/>;
            break;
        case 'number':
            record = <Number {...fieldPayload}/>;
            break;
        case 'select':
            record = <SingleSelect {...fieldPayload}/>;
            break;
        case 'currency':
            record = <CurrencyField {...fieldPayload}/>;
            break;
        case 'autonumber':
            record = <AutoNumber {...fieldPayload} recordIdx={recordIdx}/>;
            break;
        case 'url':
            record = <Url {...fieldPayload}/>;
            break;
        case 'date':
            record = <DateField {...fieldPayload}/>;
            break;
        case 'email':
            record = <Email {...fieldPayload}/>;
            break;
        case 'phone':
            record = <Phone {...fieldPayload}/>;
            break;
        case 'percent':
            record = <Percent {...fieldPayload}/>;
            break;
        case 'attachment':
            record = <Attachment {...fieldPayload}/>;
            break;
        case 'multiple':
            record = <MultipleSelect {...fieldPayload}/>;
            break;
        case 'checkbox':
            const fieldPayloadCheckbox = {...fieldPayload };
            record = <CheckboxItem {...fieldPayloadCheckbox}/>;
            break;
        default:
            record = <TextLine {...fieldPayload}/>;
    }

    return (
        <div className="field__item">
            {record}
        </div>
    );
};

export default class RecordDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeHistory: true,
            activeComments: false
        }
	    this.openComments = this.openComments.bind(this)
    }

    openComments() {
    	this.setState({activeComments: true})
    }

    render(){
        return (
        <Modal 
            open={true}
            onClose={(event) => this.props.onOpenRecordDialog('')}
            className="recordDialog-modal"
            >
            <Modal.Header className="record-details">
                Record details
                <div className='closeIcon'><Icon
                    name='close'
                    className="closeRecordDialogBtn"
                    onClick={(event) => this.props.onOpenRecordDialog('')}
                /></div>
            </Modal.Header>
            <Modal.Content image className="modal-content">
                <Modal.Description className="modal-fields-block content scrolling">
                    {this.props.record.record_data.map((recordItem, fieldIndex) => {
                        return (
                            <div key={recordItem._id} className="modal-field-item">
                                <div className="modal-field-name">
                                    <Icon name={fieldIcons[this.props.fields[fieldIndex].type ]} className="field__icon"/>
                                    {this.props.fields[fieldIndex].name}
                                </div>
                                <div className={this.props.fields[fieldIndex].type=='multiple'||this.props.fields[fieldIndex].type=='select'? 'expand-record-item':''}>
                                <Recordtem id={recordItem._id} 
                                        type={this.props.fields[fieldIndex].type}
                                        data={recordItem.data} 
                                        recordData={this.props.recordData}
                                        uploadAttachment={this.props.uploadAttachment} 
                                        deleteFile={this.props.deleteFile}
                                        currentField={this.props.fields[fieldIndex]} 
                                        recordIdx={this.props.ecordIdx}
                                        tableId={this.props.tableId}
                                />
                                </div>
                            </div>
                        )
                    })}
                </Modal.Description>
                <Modal.Description className="modal-sidebar-block">
                    <Accordion fluid>
                        <Accordion.Title onClick={()=> this.setState({activeHistory: !this.state.activeHistory, activeComments: !this.state.activeComments})}>
                            <Header><Icon name="history" className="history-icon"/> History</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeHistory}>
                            <HistoryList record={this.props.record} fields={this.props.fields} />
                        </Accordion.Content>

                        <Accordion.Title onClick={()=> this.setState({activeHistory: !this.state.activeHistory, activeComments: !this.state.activeComments})}>
                            <Header><Icon name="commenting outline" className="comments-icon"/> Comments</Header>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeComments}>
                             <CommentsBlock record={this.props.record}
                                    deleteComment={this.props.deleteComment}
                                    tableId={this.props.tableId}/>
                        </Accordion.Content>
                    </Accordion>
                    <CommentsForm record={this.props.record}
                                  openComments={this.openComments}
                                  user={this.props.user}
                                  tableId={this.props.tableId}
                                  onKeyPressComment={this.props.onKeyPressComment}/>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
    }
}

