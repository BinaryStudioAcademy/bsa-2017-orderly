import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Icon} from 'semantic-ui-react';
import * as gridActions from './gridActions';
import {fieldIcons} from "../../configuration/fieldTypes";
import './gridContent.scss';
import TextLine from './fields/textLine/textLine';
import LongText from './fields/longText/longText';
import Number from './fields/number/number';
import FieldMenu from './fieldMenu/fieldMenu';

const Field = ({id, tableId, type, name, records, fieldEvents, showFieldMenu, changeFieldType, changeFieldName}) => {
    return (
        <div className="field__items">
            <div className="content__field">
                <Icon name={fieldIcons[type]} className="field__icon"/>
                <span>{name}</span>
                <FieldMenu
                    onClick={showFieldMenu}
                    id={id}
                    tableId={tableId}
                    name={name}
                    type={type}
                    changeFieldType={changeFieldType}
                    changeFieldName={changeFieldName}
                    records={records}
                />
            </div>
            <div className="field__items">
                {records.map((record) => {
                    return <Record key={record._id} id={record._id} type={type} data={record.data} fieldEvents={fieldEvents}/>
                })}
            </div>
        </div>
    );
};

const Record = ({id, type, data, fieldEvents}) => {
    let record = null;
    switch (type) {
        case 'longtext':
            record = <LongText id={id}
                               value={data}
                               selected={fieldEvents.isRecordSelected(id)}
                               active={fieldEvents.isRecordActive(id)}
                               onSelect={fieldEvents.selectRecordHandler}
                               onActivate={fieldEvents.activateRecordHandler}
                               onKeyDown={fieldEvents.keyDownRecordHandler}
                               onChange={fieldEvents.changeRecordHandler}
                               onBlurField={fieldEvents.blurRecordHandler}
                               onBlurComponent={fieldEvents.blurRecordComponentHandler}
                               onExpand={fieldEvents.expandRecordHandler}
            >
            </LongText>;
            break;

        case 'number':
            record = <Number   id={id}
                               value={data}
                               selected={fieldEvents.isRecordSelected(id)}
                               active={fieldEvents.isRecordActive(id)}
                               onSelect={fieldEvents.selectRecordHandler}
                               onActivate={fieldEvents.activateRecordHandler}
                               onKeyDown={fieldEvents.keyDownSimpleRecordHandler}
                               onChange={fieldEvents.changeRecordHandler}
                               onBlurField={fieldEvents.blurRecordHandler}
                               onBlurComponent={fieldEvents.blurRecordComponentHandler}
            >
            </Number>;
            break;

        default:
            record = <TextLine id={id}
                               value={data}
                               selected={fieldEvents.isRecordSelected(id)}
                               active={fieldEvents.isRecordActive(id)}
                               onSelect={fieldEvents.selectRecordHandler}
                               onActivate={fieldEvents.activateRecordHandler}
                               onKeyDown={fieldEvents.keyDownSimpleRecordHandler}
                               onChange={fieldEvents.changeRecordHandler}
                               onBlurField={fieldEvents.blurRecordHandler}
                               onBlurComponent={fieldEvents.blurRecordComponentHandler}
            >
            </TextLine>;
    }

    return (
        <div className="field__item">
            {record}
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
                    <div className="content__body">
                        {this.props.fieldsRecords &&
                        this.props.fieldsRecords.map((field) => {
                            return <Field
                                key={field._id}
                                id={field._id}
                                name={field.name}
                                type={field.type}
                                records={field.records}
                                fieldEvents={this.props.fieldEvents}
                                showFieldMenu={this.props.showFieldMenu}
                                changeFieldType={this.props.changeFieldType}
                                changeFieldName={this.props.changeFieldName}
                                tableId={this.props.currentTable._id}
                            />
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
