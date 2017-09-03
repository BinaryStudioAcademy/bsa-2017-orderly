import React, {Component} from 'react';
import { Icon, Input, Button } from 'semantic-ui-react';
import Select from 'react-select';
import { fieldIcons, fieldNames, fieldText } from "../../../configuration/fieldTypes";
import { TextType, NumberType, CurrencyType, DateType,  PercentType, CustomOptions } from "./fieldMenuOptions";
import {  SingleSelectType } from "./fieldMenuSingleSelect";
import fieldOptions from './fieldOptions'
import 'react-select/dist/react-select.css';
import './fieldMenu.scss';

let newOption;
export default class FieldMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            currentName: this.props.name,
            fieldType: '',
            fieldOptionsSS:[],
            fieldOptionsNum:'',
            fieldOptionsCur:'',
            fieldOptionsDate:'',
            fieldOptionsPercent:'',
            currentValue: ''
        };
    }
    componentWillReceiveProps(nextProps) {
      this.setState({ 
        fieldOptionsSS: nextProps.currentField.options.select,
        fieldOptionsNum: nextProps.currentField.options.number,
        fieldOptionsCur: nextProps.currentField.options.currency,
        fieldOptionsDate: nextProps.currentField.options.date,
        fieldOptionsPercent: nextProps.currentField.options.percent,
        currentValue: nextProps.currentField.type
    });

  }
    handleClickOnMenu = () => {
        if (this.refs.fieldMenu) {
            if (!this.state.isActive) {
                document.addEventListener('click', this.handleOutsideClick, false);
            } else {
                document.removeEventListener('click', this.handleOutsideClick, false);
            }

            this.setState((menuState) => ({
                isActive: !menuState.isActive,
            }));
        }
    };

    handleOutsideClick = (e) => {
        if (e.target.closest(".field__menu") === null) {
            if (this.node) {
                if (this.node.contains(e.target)) {
                    return;
                }
            }
            this.handleClickOnMenu();
        }
    };

    handleChangeName = (e) => {
        if (this.refs.fieldMenu) {
            this.setState({
                currentName: e.target.value
            })
        }
    };

    handleSumbit = () => {
        if (this.state.currentName != this.props.name) {
            this.props.changeFieldName(this.props.tableId, this.props.id, this.state.currentName)
        }
        switch (this.state.currentValue) {
            case 'select':
                this.props.changeFieldOptions(this.props.tableId, this.props.id, this.state.fieldOptionsSS, this.state.currentValue)
            break;
            case 'number':
                this.props.changeFieldOptions(this.props.tableId, this.props.id, this.state.fieldOptionsNum, this.state.currentValue)
            break;
            case 'currency':
                this.props.changeFieldOptions(this.props.tableId, this.props.id, this.state.fieldOptionsCur, this.state.currentValue)
            break;
            case 'date':
                this.props.changeFieldOptions(this.props.tableId, this.props.id, this.state.fieldOptionsDate, this.state.currentValue)
            break;
            case 'percent':
                this.props.changeFieldOptions(this.props.tableId, this.props.id, this.state.fieldOptionsPercent, this.state.currentValue)
            break;
        }
        
        this.handleClickOnMenu();
    }
    handleDeleteField = () => {
        this.props.deleteField(this.props.tableId, this.props.id)
    }
    handleChangeType =(event) => {
        this.props.changeFieldType(this.props.tableId, this.props.id, event.value)
    }
    
    handleOptionsSubmit = (event) => {
        event.preventDefault();
        if (this.state.currentValue == 'select') {
            let newArray =[...this.state.fieldOptionsSS]
            newArray.push(newOption);
            this.setState({fieldOptionsSS: newArray});
            this.refs.select.refs.input.value = '';
        }
    }

    handleOptionsChange = (event, type) => {
        switch (this.state.currentValue) {
            case 'select':
                newOption = event.target.value;
            break;
            case 'number':
                newOption = event.value;
                this.setState({fieldOptionsNum: newOption });
            break;
            case 'currency':
                newOption = event.value;
                this.setState({fieldOptionsCur: newOption });
            break;
            case 'date':
                if (type=='format') {   
                newOption = { format: event.value, time: this.state.fieldOptionsDate.time }
                this.setState({fieldOptionsDate: newOption });
                }
                if (type=='time') {
                    let newTimeOption = { format: this.state.fieldOptionsDate.format, time: event.checked }
                    this.setState({fieldOptionsDate: newTimeOption });
                }
            break;
            case 'percent':
                newOption = event.value;
                this.setState({fieldOptionsPercent: newOption });

            break;
        }

    }

    handleOptionsDelete = (optionToBeDeleted) => {
      let optionDel = this.state.fieldOptionsSS.filter((option) =>{
          return option != optionToBeDeleted
      });
      this.setState({fieldOptionsSS: optionDel});
    }

    render() {
        return(
            <div ref="fieldMenu" className='field__ellipsis'>
                <div ref={(node) => this.node = node } >
                    <div onClick={(e) => this.handleClickOnMenu(e)} >
                        <Icon name="ellipsis vertical" className="field__change-type"/>
                    </div>
                </div>
                <div className ={this.props.showFieldMenu === this.props.fieldId && this.state.isActive ? "field__menu" : "hide"}>
                    <Input className="menu__name"
                           value={this.state.currentName}
                           onChange={this.handleChangeName}
                    />
                    {this.props.index !== 0 &&
                    <Icon name="trash outline"
                        id="menu__delete"
                        size="large"
                        onClick={this.handleDeleteField}/>
                    }
                    <div>
                        <div className="fields-menu-options-container"> 
                            <Select options={fieldOptions}
                                value={this.state.currentValue}
                                placeholder='Choose field type'
                                onChange = {this.handleChangeType}
                            />
                            
                        </div>
                        <div className="explanation-text-wrapper">
                            <div className="explanation-text">{fieldText[this.state.currentValue]}</div> 
                        </div>
                        <SingleSelectType
                            fieldOptionsSS={this.state.fieldOptionsSS}
                            handleOptionsSubmit={this.handleOptionsSubmit}
                            handleOptionsChange={this.handleOptionsChange}
                            handleOptionsDelete={this.handleOptionsDelete}
                            type={this.state.currentValue}
                            ref='select'
                            currentField={this.props.currentField}
                        />
                        <CustomOptions 
                            type={this.state.currentValue}
                            handleOptionsChange={this.handleOptionsChange}
                        />
                        
                        <TextType type={this.state.currentValue} />
                        <div className='button-wrapper' 
                                onClick={this.handleSumbit}
                            >
                            <div className='save-btn'>Save</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
