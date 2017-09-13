import React, {Component} from 'react';
import FormViewFields from './formViewFields';
import { Input, TextArea, Form } from 'semantic-ui-react';
import './formViewContainer.scss';
import logo from '../../../../../images/logo.png';

let newFormInd = 0
export default class FormViewContainer extends Component {
    constructor(props) {
        super(props);
        
        const activeView = this.props.currentTable.views.find((v) => v.view._id === this.props.currentViewId);
        console.log(activeView)
        this.state ={
            formName: activeView.view.name || 'Form Name',
            formDescr: activeView.view.description || 'Add a description of this form',

        }
    }

    handleBlur = (event, data) => {
        this.props.updateFormName(event.target.value, this.props.currentTableId, this.props.currentViewId)        
    }
    handleBlurDescr = (event, data) => {
        this.props.updateFormDescription(event.target.value, this.props.currentTableId, this.props.currentViewId)        
    }

    render() {
        return (
            <div className='formContainer'>
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
                                            <div className='form-name'>
                                                <Input value = {this.state.formName}
                                                    onClick={(event) => this.setState({formName: event.value})}
                                                    onBlur={(event, data) => this.handleBlur(event)}
                                                /> 
                                            </div>
                                        </div>
                                        <div className='form-description'>
                                            <Form>
                                            <TextArea value = {this.state.formDescr} autoHeight
                                                onClick={(event) => this.setState({formDescr: event.value})}
                                                onBlur={(event) => this.handleBlurDescr(event)}
                                            />
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormViewFields fields={this.props.currentTable.fields}
                                    included={this.props.included}
                                    excludeField={this.props.excludeField}
                                    records={this.props.currentTable.records}
                                    record={this.props.currentTable.records[this.props.currentTable.records.length-1]}
                                    recordData={this.props.recordData}
                                    currentViewId={this.props.currentViewId}
                                    currentTableId={this.props.currentTable._id}
                                    uploadAttachment={this.props.uploadAttachment}
                                    deleteFile={this.props.deleteFile}
                                    form={this.props.form}
                    />
                </div>
            </div>
        );
    }
}
