import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Button, Icon} from 'semantic-ui-react';
import * as gridActions from './gridActions';
import './gridContent.scss';
import TextLine from './fields/textLine/textLine';
import LongText from './fields/longText/longText';
import Number from './fields/number/number';
import ExpandRecord from '../expandRecord/expandRecord';

const Field = ({type, name, index, records, recordData, showFieldMenu}) => {
    return (
        <div className="field__items">
            <div className="content__field">
                <Icon name="font" className="field__icon"/>
                <span>{name}</span>
                <Icon name="ellipsis vertical" className="field__change-type" onClick={showFieldMenu}/>
            </div>
            <div className="field__items">
                {records.map((record) => {
                    return <Record key={record.record_data[index]._id}
                                   id={record.record_data[index]._id}
                                   type={type}
                                   data={record.record_data[index].data}
                                   recordData={recordData}/>
                })}
            </div>
        </div>
    );
};

const Record = ({id, type, data, recordData}) => {
    let record = null;
    switch (type) {
        case 'longtext':
            record = <LongText id={id}
                               value={data}
                               selected={recordData.isRecordSelected(id)}
                               active={recordData.isRecordActive(id)}
                               onSelect={recordData.selectRecordHandler}
                               onActivate={recordData.activateRecordHandler}
                               onKeyPress={recordData.keyPressRecordHandler}
                               onBlurField={recordData.blurRecordHandler}
                               onBlurComponent={recordData.blurRecordComponentHandler}
                               onExpand={recordData.expandRecordHandler}
                               autoFocus={true}
            >
            </LongText>;
            break;

        case 'number':
            record = <Number   id={id}
                               value={data}
                               selected={recordData.isRecordSelected(id)}
                               active={recordData.isRecordActive(id)}
                               onSelect={recordData.selectRecordHandler}
                               onActivate={recordData.activateRecordHandler}
                               onKeyPress={recordData.keyPressSimpleRecordHandler}
                               onBlurField={recordData.blurRecordHandler}
                               onBlurComponent={recordData.blurRecordComponentHandler}
                               autoFocus={true}
            >
            </Number>;
            break;

        default:
            record = <TextLine id={id}
                               value={data}
                               selected={recordData.isRecordSelected(id)}
                               active={recordData.isRecordActive(id)}
                               onSelect={recordData.selectRecordHandler}
                               onActivate={recordData.activateRecordHandler}
                               onKeyPress={recordData.keyPressSimpleRecordHandler}
                               onBlurField={recordData.blurRecordHandler}
                               onBlurComponent={recordData.blurRecordComponentHandler}
                               autoFocus={true}
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
                        <div className="field__items row-options-field">
                            <div className="content__field row-options-field">
                                <Icon name="font" className="field__icon"/>
                            </div>
                            <div className="field__items row-options-field">
                                {this.props.currentTable &&
                                this.props.currentTable.records.map((record, recordIndex) => {
                                    return (
                                        <div className="row-control-container" key={record._id}>
                                            <Button
                                                className="expand-btn"
                                                onClick={(event) => this.props.onExpandRecord(recordIndex)}>
                                                <Icon name='expand'/>
                                            </Button>
                                        </div>
                                    )
                                })}
                                {this.props.expandRecordIndex &&
                                    <ExpandRecord
                                        record={this.props.currentTable.records[this.props.expandRecordIndex]}
                                        fields={this.props.currentTable.fields}
                                        recordData={this.props.recordData}
                                        recordIndex={this.props.expandRecordIndex}
                                        onExpandRecord={this.props.onExpandRecord}
                                    />
                                }
                            </div>
                        </div>

                        {this.props.currentTable &&
                        this.props.currentTable.fields.map((field, fieldIndex) => {
                            return <Field
                            key={field._id}
                            name={field.name}
                            type={field.type}
                            index={fieldIndex}
                            records={this.props.currentTable.records}
                            recordData={this.props.recordData}
                            showFieldMenu={this.props.showFieldMenu}
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


// {this.props.fieldsRecords &&
// this.props.fieldsRecords.map((field, ind) => {
//     return (
//         <div className="content__field item__row-selector">
//             <span className="item__row_num">{ind}</span>
//         </div>
//     )
// })}


//<div className="content__field item__row-selector">
//    <input type="checkbox"/>
//</div>
