import React, {Component} from 'react';
import './gridContent.scss';
import {Icon} from 'semantic-ui-react';


const Record = ({type, data}) => {
    return (
        <div className="field__item">
            <span>{data}</span>
        </div>
    );
};

const Field = ({type, name, records}) => {
    return (
        <div className="field__items">
            <div className="content__field">
                <Icon name="font" className="field__icon"/>
                <span>{name}</span>
            </div>
            <div className="field__items">
                {records && records.map((record) => {
                    return <Record key={record._id} type='text' data={record.data}/>
                })}
            </div>
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
                <div className="content__field item__row-selector">
                    <input type="checkbox"/>
                </div>
                <div className="content__body">
                    {this.props.fieldsRecords &&
                    this.props.fieldsRecords.map((field) => {
                        return <Field key={field._id} name={field.name} records={field.records}/>
                    })}
                </div>
                <div className="content__field item__add-field" onClick={this.handleAddField}>
                    <Icon name="plus" className="field__icon"/>
                </div>
            </div>
        );
    }
};
