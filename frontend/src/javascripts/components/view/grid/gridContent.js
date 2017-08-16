import React, {Component} from 'react';
import './gridContent.scss';
import {Icon} from 'semantic-ui-react';
import {GridCell} from './gridCell';

const Field = ({type, name, records}) => {
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
                    {this.props.currentTable &&
                    this.props.currentTable.fields.map((field) => {
                        return <Field key={field._id} name={field.name}/>
                    })}
                    <div className="header__item item__add-field" onClick={this.handleAddField}>
                        <Icon name="plus" className="item__icon"/>
                    </div>
                </div>
                <div className="content__body">
                    {this.props.currentTable &&
                    this.props.currentTable.records.map((row, ind) => {
                        return (
                            <div key={row._id} className="body__row">
                                <div className="body__item item__row-selector">{ind+1}</div>
                                {row.record_data.map((data) => {
                                    return <GridCell key={data._id} type='text' data={data.data}/>
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
