import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Icon} from 'semantic-ui-react';
import * as gridActions from './gridActions';
import './gridContent.scss';
import TextLine from './fields/textLine/textLine';
import LongText from './fields/longText/longText';
import Number from './fields/number/number';
import ExpandRecord from '../expandRecord/expandRecord';

const Field = ({type, name, records, recordData, showFieldMenu}) => {
    return (
        <div className="field__items">
            <div className="content__field">
                <Icon name="font" className="field__icon"/>
                <span>{name}</span>
                <Icon name="ellipsis vertical" className="field__change-type" onClick={showFieldMenu}/>
            </div>
            <div className="field__items">
                {records.map((record) => {
                    return <Record key={record._id} id={record._id} type={type} data={record.data} recordData={recordData}/>
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
                                {this.props.expandRecords &&
                                this.props.expandRecords.map((record, ind) => {
                                    return <ExpandRecord
                                        key={record._id}
                                        recordId={record._id}
                                        record_data={record.record_data}
                                        comments={record.comments}
                                        history={record.comments}
                                        recordData={this.props.recordData}
                                        expandRecords={this.props.expandRecords}
                                        rowNumber={ind}
                                    />
                                })}
                            </div>
                        </div>
                        {this.props.fieldsRecords &&
                        this.props.fieldsRecords.map((field) => {
                            return <Field
                                key={field._id}
                                name={field.name}
                                type={field.type}
                                records={field.records}
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
