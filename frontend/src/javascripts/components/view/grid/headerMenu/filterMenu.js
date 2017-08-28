import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import {fieldIcons, fieldNames} from "../../../configuration/fieldTypes";
import './filterMenu.scss';

export default class FilterMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldId: null,
            condition: 'contains',
            filterQuery: ''
        };
    }

    preformFilter = () => {
        if (this.state.fieldId) {
            this.props.filterRecords(this.state)
        }
    };

    render() {
        return (
            <div className={this.props.isActive ? "filter__menu" : "hide"}>
                <Icon className="menu__item" name="x"/>
                <Icon name="checkmark" className="menu__item" onClick={() => this.preformFilter()}/>
                <span className="menu__item">Where</span>
                <select className="menu__item item__select" onChange={(e) => this.setState({fieldId: e.target.value})}>
                    {this.props.currentTable.fields &&
                    this.props.currentTable.fields.map((field, ind) => {
                        return (
                            <option key={ind} value={field._id}>{field.name}</option>
                        );
                    })}
                </select>
                <select className="menu__item item__select" onChange={(e) => this.setState({condition: e.target.value})}>
                    {filterOptions.map((opt, ind) => {
                        return <option key={ind} value={opt.value}>{opt.label}</option>;
                    })}
                </select>
                {!this.state.condition.includes('empty') &&
                <input className="menu__item" type="text" onChange={(e) => this.setState({filterQuery: e.target.value})}/>}
            </div>
        );
    }
}

const filterOptions = [
    {value: 'contains', label: 'contains'},
    {value: '!contains', label: 'does not contain'},
    {value: 'is', label: 'is'},
    {value: '!is', label: 'is not'},
    {value: 'empty', label: 'is empty'},
    {value: '!empty', label: 'is not empty'},
];

//<Icon name={fieldIcons[field.type]}/>