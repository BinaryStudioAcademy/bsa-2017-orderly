import React, {Component} from 'react';
import {connect} from 'react-redux';
import './gridContent.scss';
import {Icon} from 'semantic-ui-react';
import {GridCell} from './gridCell';

const MOCK_FIELDS = [
    {
        description: "Gadgets without a single problem",
        type: "text",
        name: "Xiaomi",
        _id: "5992e76c73640e30de3a511b"
    },
    {
        description: "All type of gadgets",
        type: "text",
        name: "Samsung",
        _id: "5994223abab5206884398fe1"
    }
];

const Field = ({type, name}) => {
    return (
        <div className="header__item">
            <Icon name="font" className="item__icon"/>
            <span>{name}</span>
        </div>
    );
};

export default class GridContent extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    handleAddField = () => {
	    this.props.onAddField(this.props.currentTable._id);
    };

    render() {
        return (
            <div className="grid__content">
                <div className="content__header">
                    <div className="header__item item__row-selector">
                        <input type="checkbox"/>
                    </div>
                    <div className="header__item">
                        <Icon name="font" className="item__icon"/>
                        <span>Primary</span>
                    </div>
                    {this.props.currentTable &&
                    this.props.currentTable.fields.map((field) => {
                        return <Field key={field._id} name={field.name}/>
                    })}
                    <div className="header__item item__add-field" onClick={this.handleAddField}>
                        <Icon name="plus" className="item__icon"/>
                    </div>
                </div>
                <div className="content__body">
                    <div className="body__row">
                        <div className="body__item item__row-selector">1</div>
                        <GridCell type='text' data='Primary Field'/>
                        <GridCell type='text' data='One'/>
                        <GridCell type='text' data='Two'/>
                    </div>
                </div>
            </div>
        );
    }
}
