import React, {Component} from 'react';
import {Icon, Modal, Button} from 'semantic-ui-react';
import { Link } from 'react-router';
import { Recordtem } from '../../recordDialog/recordDialog'
import {fieldIcons} from '../../../configuration/fieldTypes';

export default class FormViewFields extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='form-inputs-list-wrapper'>
                <div className='form-inputs-list'>
                    {this.props.fields.map((field, ind) => {
                        if(this.props.included.includes(field._id)) {
                            return (
                                <div key={ind}  className ={field.type === 'longtext'? "long-text-item" : field.type === 'attachment' ? "attachment-item": field.type === 'checkbox'? 'checkbox-item' :"form-inputs-list-item"}>
                                    <div className='form-inputs-name'>
                                        <Icon name={fieldIcons[field.type]}/>
                                        <span>{field.name}</span>
                                        <Icon name="delete" className="form-inputs-delete"
                                              onClick={() => this.props.excludeField(field._id, this.props.currentTableId, this.props.currentViewId)}/>
                                    </div>
                                    <Recordtem
                                        id={this.props.record.record_data[ind]._id}
                                        data={this.props.record.record_data[ind].data}
                                        type={this.props.fields[ind].type}
                                        currentField={this.props.fields[ind]}
                                        records={this.props.records}
                                        recordData={this.props.recordData}
                                        tableId={this.props.tableId}
                                        uploadAttachment={this.props.uploadAttachment}
                                        deleteFile={this.props.deleteFile}
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
                <div className='submit-btn'>
                    <Modal trigger={<Button type='submit'>Sumbit form</Button>} size ='tiny' closeIcon>
                        <Modal.Content>
                          <div className='content-import-spreadsheet'>
                              <div className='content-import-subheader'>Your form has been successfully submitted!</div>
                              <div className='thank-you'>Thank you! </div>
                              <div className='content-import-btn'><Link to={'/'}><Button color='blue'>Learn more about Orderly</Button></Link></div>
                          </div>
                        </Modal.Content>
                    </Modal>

                </div>
            </div>
        );
    }
}

/*
<div className='form-inputs-list-item'>
    <div className='form-inputs-name'>Long-text</div>
    <input className='input-form' type='text'/>
</div>
<div className='form-inputs-list-item'>
    <div className='form-inputs-name'>Number</div>
<input className='input-form' type='text'/>
</div>
<div className='form-inputs-list-item'>
    <div className='form-inputs-name'>Url</div>
    <input className='input-form' type='text'/>
</div>
<div className='form-inputs-list-item'>
    <div className='form-inputs-name'>Date</div>
<input className='input-form' type='text'/>
</div>
*/