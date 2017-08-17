import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Icon} from 'semantic-ui-react';
import * as gridActions from './gridActions';
import './gridContent.scss';

const Field = ({type, name, records}) => {
    return (
        <div className="field__items">
            <div className="content__field">
                <Icon name="font" className="field__icon"/>
                <span>{name}</span>
                <Icon name="ellipsis vertical" className="field__change-type"/>
            </div>
            <div className="field__items">
                {records.map((record) => {
                    return <Record key={record._id} type='text' data={record.data}/>
                })}
            </div>
        </div>
    );
};

const Record = ({type, data}) => {
    return (
        <div className="field__item">
            <span>{data}</span>
        </div>
    );
};

class GridContent extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleAddField = () => {
        this.props.onAddField(this.props.currentTable._id);
    };

    handleAddRecord = () => {
        this.props.onAddRecord(this.props.currentTable._id);
    };

    render() {
        return (
            <div>
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
                <div className="content__field item__add-record" onClick={this.handleAddRecord}>
                    <Icon name="plus" className="field__icon"/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gridReducer: state.gridReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(gridActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContent);
