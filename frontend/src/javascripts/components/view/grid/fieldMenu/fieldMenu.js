import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';
import {fieldIcons, fieldNames} from "../../../configuration/fieldTypes";
import './fieldMenu.scss';

const FieldOptions = ({id, tableId, records, excludeType, changeFieldType, closeMenu}) => {
    let fieldOptions = [];
    for (let [fieldType, fieldIcon, _] of Object.entries(fieldIcons)) {
        if (fieldType !== excludeType) {
            fieldOptions.push(
                <div key={fieldType}
                     className="menu__field-option"
                     onClick={() => {
                         closeMenu();
                         return changeFieldType(tableId, fieldType, id, records)}
                     }>
                    <Icon name={fieldIcon} className="field__icon"/>
                    <span>{fieldNames[fieldType]}</span>
                </div>
            );
        }
    }
    return (
        <div>
            {fieldOptions}
        </div>
    );
};

export default class FieldMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            currentName: this.props.name,
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

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.props.changeFieldName(this.props.tableId, this.props.id, this.state.currentName);
            this.handleClickOnMenu();
        }
    };

    handleDeleteField = () => {
        this.props.deleteField(this.props.tableId, this.props.id)
    };

    render() {
        return(
            <div ref="fieldMenu" className='field__ellipsis'>
                <div ref={(node) => this.node = node } >
                    <div onClick={(e) => this.handleClickOnMenu(e)} >
                        <Icon name="ellipsis vertical" className="field__change-type"/>
                    </div>
                </div>
                <div className ={this.props.showFieldMenu === this.props.fieldId && this.state.isActive ? "field__menu" : "hide"}>
                    <input className="menu__name"
                           value={this.state.currentName}
                           onChange={this.handleChangeName}
                           onKeyPress={this.handleKeyPress}
                    />
                    {this.props.index !== 0 &&
                    <Icon name="trash outline"
                        id="menu__delete"
                        size="large"
                        onClick={this.handleDeleteField}/>
                    }
                    <FieldOptions id={this.props.id}
                                  excludeType={this.props.type}
                                  changeFieldType={this.props.changeFieldType}
                                  records={this.props.records}
                                  tableId={this.props.tableId}
                                  closeMenu={this.handleClickOnMenu}/>
                </div>
            </div>
        );
    }
}
