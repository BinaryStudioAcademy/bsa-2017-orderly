import React, {Component} from 'react';
import { Icon, Dropdown, Input, Button } from 'semantic-ui-react';
import { fieldIcons, fieldNames, fieldText } from "../../../configuration/fieldTypes";
import { TextType, NumberType } from "./fieldMenuOptions";
import {  SingleSelectType } from "./fieldMenuSingleSelect";
import './fieldMenu.scss';

let newOption;
export default class FieldMenu extends Component {
    constructor(props) {
        super(props);
        const id = props.id;
        const tableId = props.tableId;
        const changeFieldType = props.changeFieldType;
        const changeFieldOptions = props.changeFieldOptions;

        this.state = {
            isActive: false,
            currentName: this.props.name,
            fieldType: '',
            fieldOptionsSS:[]
        };
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

    handleSumbit = (e) => {
        this.props.changeFieldType(this.props.tableId, this.state.fieldType, this.props.id);
        this.props.changeFieldName(this.props.tableId, this.props.id, this.state.currentName);
        this.props.changeFieldOptions(this.props.tableId, this.state.fieldOptionsSS, this.props.id);
        this.handleClickOnMenu();
    }
    handleDeleteField = () => {
        this.props.deleteField(this.props.tableId, this.props.id)
    }

    handleOptionsSubmit = (event) => {
        event.preventDefault();
        this.state.fieldOptionsSS.push(newOption);
        this.setState({fieldOptionsSS: this.state.fieldOptionsSS});
        this.refs.select.refs.input.value = '';
    }

    handleOptionsChange = (event) => {
      newOption = event.target.value;
    }

    handleOptionsDelete = (optionToBeDeleted) => {
      let optionDel = this.state.options.filter((option) =>{
          return option != optionToBeDeleted
      });
      this.setState({fieldOptionsSS: optionDel});
    }

    render() {
        let type = this.props.type;
        let fieldOptions = [];
        let num = 0;
        for (let [fieldType, fieldIcon, _] of Object.entries(fieldIcons)) {
        if (fieldType !== this.props.type) {
            fieldOptions.push(
                {
                    key: fieldType,
                    text: new Object(
                        <div key={fieldType}
                             className="menu__field-option"
                             >
                            <Icon name={fieldIcon} className="field__icon"/>
                            <span>{fieldNames[fieldType]}</span>
                        </div>
                        ),
                    value: ++num
                }
            )
        }
    }
        
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
                            <Dropdown options={fieldOptions}
                                placeholder='Choose field type'
                                onChange = {(e, data) => this.setState({ fieldType: data.options[data.value-1].key})}
                            />
                            
                        </div>
                        <div className="explanation-text-wrapper">
                            <div className="explanation-text">{this.state.fieldType!=''?fieldText[this.state.fieldType]:''}</div> 
                        </div>
                        <SingleSelectType
                            fieldOptionsSS={this.state.fieldOptionsSS}
                            handleOptionsSubmit={this.handleOptionsSubmit}
                            handleOptionsChange={this.handleOptionsChange}
                            handleOptionsDelete={this.handleOptionsDelete}
                            ref='select'
                        />
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
