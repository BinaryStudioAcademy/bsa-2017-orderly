import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Icon} from 'semantic-ui-react';
import * as gridActions from './gridActions';
import {fieldIcons} from "../../configuration/fieldTypes";
import './gridContent.scss';
import TextLine from './fields/textLine/textLine';
import LongText from './fields/longText/longText';
import CurrencyField from './fields/currency/currency';
import Number from './fields/number/number';
import AutoNumber from './fields/autoNumber/autoNumber';
import Url from './fields/url/url';
import DateField from './fields/date/date';
import Email from './fields/email/email';
import FieldMenu from './fieldMenu/fieldMenu';

const RowNum = ({tableId, recordId, index, deleteRecord}) => {
    return (
        <div className="rows__row" onContextMenu={(e) => {deleteRecord(e, tableId, recordId)}}>
            <span>{index+1}</span>
        </div>
    )
};

const Field = ({id, tableId, type, name, index, records, tableRecords, recordData, showFieldMenu,
                   changeFieldType, changeFieldName, deleteField}) => {
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
                    deleteField={deleteField}
                    records={records}
                    index={index}
                />
            </div>
            <div className="field__items">
                {tableRecords &&
                 tableRecords.map((record, idx) => {
                    return <Record key={record.record_data[index]._id}
                                   id={record.record_data[index]._id}
                                   recordIdx={idx}
                                   type={type}
                                   data={record.record_data[index].data}
                                   recordData={recordData}/>
                })}
            </div>
        </div>
    );
};

const Record = ({id, type, data, recordData, recordIdx}) => {
    const fieldPayload = {
        id: id,
        value: data,
        selected: recordData.isRecordSelected(id),
        active: recordData.isRecordActive(id),
        onSelect: recordData.selectRecordHandler,
        onActivate: recordData.activateRecordHandler,
        onKeyPress: recordData.keyPressRecordHandler,
        onBlurField: recordData.blurRecordHandler,
        onBlurComponent: recordData.blurRecordComponentHandler,
        onExpand: recordData.expandRecordHandler,
    };
    let record = null;
    switch (type) {
    case 'longtext':
        record = <LongText {...fieldPayload}/>;
        break;

    case 'number':
        record = <Number {...fieldPayload}/>;
        break;

    case 'currency':
        record = <CurrencyField {...fieldPayload}/>;
        break;

    case 'autonumber':
        record = <AutoNumber {...fieldPayload} recordIdx={recordIdx}/>;
        break;

    case 'url':
        record = <Url {...fieldPayload}/>;
        break;
    case 'date':
        record = <DateField {...fieldPayload}/>;
        break;

    case 'email':
        record = <Email {...fieldPayload}/>;
        break;
    default:
        record = <TextLine {...fieldPayload}/>;
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

    handleDeleteRecord = (event, tableId, recordId) => {
        event.preventDefault();
        this.props.deleteRecord(tableId, recordId);
    };

    render() {
        return (
            <div>
                <div className="wrapper__grid">
                    <div className="grid__content">
                        <div className="content__rows">
                            <div className="rows__selector rows__row">
                                <Icon name="lock"/>
                            </div>
                            {this.props.currentTable &&
                             this.props.currentTable.records.map((record, ind) => {
                                return <RowNum key={record._id}
                                               tableId= {this.props.currentTable._id}
                                               recordId={record._id}
                                               index={ind}
                                               deleteRecord={this.handleDeleteRecord}/>
                             })
                            }
                        </div>
                        <div className="content__body">
                            {this.props.fieldsRecords &&
                            this.props.fieldsRecords.map((field, fieldIndex) => {
                                return <Field
                                    key={field._id}
                                    id={field._id}
                                    name={field.name}
                                    type={field.type}
                                    index={fieldIndex}
                                    records={field.records}
                                    recordData={this.props.recordData}
                                    tableRecords={this.props.currentTable.records}
                                    showFieldMenu={this.props.showFieldMenu}
                                    changeFieldType={this.props.changeFieldType}
                                    changeFieldName={this.props.changeFieldName}
                                    deleteField={this.props.deleteField}
                                    tableId={this.props.currentTable._id}
                                />
                            })}
                        </div>
                    </div>
                    <div className="content__field item__add-record" onClick={this.handleAddRecord}>
                        <Icon name="plus" className="field__icon"/>
                    </div>
                </div>
                <div className="content__field item__add-field" onClick={this.handleAddField}>
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
