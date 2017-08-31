import React, {Component} from 'react';
import {Icon, Checkbox} from 'semantic-ui-react';
import {fieldIcons, fieldNames} from "../../../configuration/fieldTypes";
import './sortMenu.scss';

export default class SortMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldId: this.props.currentTable.fields[0]._id,
            fieldType: this.props.currentTable.fields[0].type,
            sortOption: 'text-asc',
        };
    }

    preformSort = () => {
        this.props.sortRecords(this.state)
    };

    render() {
        return (
            <div className={this.props.isActive ? "sort__menu" : "hide"}>
                <Icon className="menu__item" name="x" link/>
                <Icon className="menu__item" name="checkmark" link onClick={() => this.preformSort()}/>
                <span className="menu__item item__label-sort-by">Sort by</span>
                <select className="menu__item item__select" onChange={(e) => {
                    let [fieldId, fieldType] = e.target.value.split(',');
                    let setType = 'number';
                    if (textTypes.includes(fieldType)){
                        setType = 'text';
                    }
                    this.setState({
                        fieldId: fieldId,
                        fieldType: setType
                    });
                }}>
                {this.props.currentTable.fields.map((field, ind) => {
                    return (
                        <option key={ind} value={[field._id, field.type]}>{field.name}</option>
                    );
                })}
                </select>
                <span className="menu__item">from</span>
                <div className="menu__item option__choices">
                {sortOptions[this.state.fieldType].map((opt, ind) => {
                    return <div key={ind}
                                className={this.state.sortOption === opt.value ? 'sort__option option__checked' : 'sort__option'}
                                value={opt.value}
                                onClick={() => this.setState({sortOption: opt.value})}>
                                <span>{opt.label}</span>
                           </div>;
                })}
                </div>
            </div>
        );
    }
}

const textTypes = ['text', 'longtext', 'url', 'email'];

const sortOptions = {
    text: [
        {value: 'text-asc', label: 'A -> Z'},
        {value: 'text-desc', label: 'Z -> A'}
    ],
    number: [
        {value: 'num-asc', label: '1 -> 9'},
        {value: 'num-desc', label: '9 -> 1'}
    ],
};

//<Icon name={fieldIcons[field.type]}/>