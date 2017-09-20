import React, {Component} from 'react';
import FormViewFields from './formViewFields';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as formViewActions from '../formViewActions';
import logo from '../../../../../images/logo.png';
import {Icon, Modal, Button} from 'semantic-ui-react';
import { Link } from 'react-router';
import { Recordtem } from '../../recordDialog/recordDialog'
import {fieldIcons} from '../../../configuration/fieldTypes';
import './formViewContainer.scss';

let newFormInd = 0
class ContainerForShare extends Component {
    constructor(props) {
        super(props);
        this.state ={
            table: '',
            view: '',
            curentInd: '',
            formName: '',
            formDescr: '',
            checked: false,
            uploadAttachment: () => {},
            deleteFile: () => {},
        }
    }
    componentWillMount(){
        let tableId = this.props.params.tableId;
        let viewId = this.props.params.viewId;
        this.props.getTableAndView(tableId, viewId);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.formView.table && nextProps.formView.view) {
            let showFields = [];
            let i = 0 ; 
            for (let field in nextProps.formView.view.fields_config) {
                if (nextProps.formView.view.fields_config[field].included === true ) {
                    showFields[i] = nextProps.formView.view.fields_config[field].field;
                    i += 1;
                }
            }
            this.setState({
                table: nextProps.formView.table, 
                view: nextProps.formView.view, 
                included: showFields,
                formName: nextProps.formView.view.name,
                formDescr: nextProps.formView.view.description,
                uploadAttachment: nextProps.uploadAttachment,
                deleteFile: nextProps.deleteFile
            })
        }
    }
    handleSubmit =() => {
        let newTable = Object.assign({}, this.state.table)
        let newRecord = {};
        let recordData = [];
        newRecord.comments = [];
        newRecord.history = [];
        for (let j = 0; j < newTable.fields.length; j++) {
            recordData[j] = {data:""};
        }
        for (let j = 0; j < newTable.fields.length; j++) {
            for ( let ind in this.props.formView.record_data ) {
                if (this.props.formView.record_data[ind].position == j) {
                    recordData[j].data = this.props.formView.record_data[ind].data;
                }
            }
        }
        newRecord.record_data = [...recordData];
        let sentTable = {...newTable, records: newTable.records.concat(newRecord)};
        this.props.updateableByFormData(this.state.table._id, sentTable)
    }
    
    render() {
        const recordData = {
            isRecordSelected: () => {},
            isRecordActive: () => {},
            activateRecordHandler: () => {},
            keyPressRecordHandler: () => {},
            keyPressSimpleRecordHandler: () => {},
            blurRecordHandler: () => { },
            blurRecordComponentHandler: (id, value) => { this.props.putRecordInState(value, this.state.curentInd)},
            changeCheckboxHandler: () => {},
            mouseDownRecordItemHandler: () => {},
            mouseOverRecordItemHandler: () => {}
        };
        return (
            <div className='formContainer form-for-share'>
                <div className='form-wrapper'>
                    <div className='formHeaderContainer'>
                        <div className='container1'>
                            <div className='container2'>
                                <div className='cover-image'>
                                    <div className='cover-image2'/>
                                </div>
                                <div className='form-name-block-wrapper'>
                                    <div className='form-name-block'>
                                        <div className='form-name-logo'>
                                            <img src={logo}/>
                                        </div>
                                        <div>
                                            <div className='form-name'>{this.state.formName}</div>
                                        </div>
                                        <div className='form-description'>
                                            {this.state.formDescr}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form-inputs-list-wrapper'>
                        <div className='form-inputs-list'>
                            {this.state.table ? this.state.table.fields.map((field, ind) => {
                                if(this.state.included.includes(field._id) && field.type !== 'autonumber' ) {
                                        return (
                                            <div key={ind}  onClick = {() => this.setState({curentInd: ind})} className ={field.type === 'longtext'? "long-text-item" : field.type === 'attachment' ? "attachment-item": field.type === 'checkbox'? 'checkbox-item' :"form-inputs-list-item"}>
                                                <div className='form-inputs-name'>
                                                    <Icon name={fieldIcons[field.type]}/>
                                                    <span>{field.name}</span>
                                                </div>
                                                <div className='form-to-share-record-item-wrapper'>
                                                  
                                                    <Recordtem recordData={recordData}
                                                        type={field.type}
                                                        currentField={field}
                                                        id=''
                                                        data=''
                                                        records=''
                                                        recordIdx={this.state.curentInd}
                                                        tableId={this.state.table._id}  
                                                        uploadAttachment={this.state.uploadAttachment}
                                                        deleteFile={this.state.deleteFile}
                                                    />

                                                </div>
                                            </div>
                                        );
                                }
                            }):<div></div>}
                        </div>
                        <div className='submit-btn'>
                            <Modal trigger={<Button type='submit' onClick={this.handleSubmit}>Sumbit form</Button>} size ='tiny' closeIcon>
                                <Modal.Content>
                                  <div className='content-import-spreadsheet'>
                                      <div className='content-subheader-share-form'>Your form has been successfully submitted!</div>
                                      <div className='thank-you'>Thank you! </div>
                                      <div className='content-import-btn'><Link to={'/'}><Button color='blue'>Learn more about Orderly</Button></Link></div>
                                  </div>
                                </Modal.Content>
                            </Modal>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        formView: state.formView
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(formViewActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerForShare);