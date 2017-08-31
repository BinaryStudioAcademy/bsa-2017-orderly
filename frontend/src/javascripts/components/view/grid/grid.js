import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import GridHeader from './gridHeader';
import GridContent from './gridContent';
import * as gridActions from './gridActions';
import './grid.scss';

class Grid extends Component{
    constructor(props) {
        super(props);
    }

    handleSort = (payload) => {
        this.props.sortRecords(this.props.currentTable, payload.fieldId, payload.sortOption);
    };

    handleFilter = (payload) => {
        this.props.filterRecords(this.props.currentTable, payload.fieldId, payload.condition, payload.filterQuery);
    };

    handleRemoveFilter = () => {
        this.props.removeFilter();
    };

    render() {
        return (
            <div className="grid-view">
                <GridHeader
                    currentTable={this.props.currentTable}
                    sortRecords={this.handleSort}
                    filterRecords={this.handleFilter}
                    removeFilter={this.handleRemoveFilter}
                />
                <GridContent
                    currentTable={this.props.currentTable}
                    sortedRecords={this.props.sortedRecords}
                    filteredRecords={this.props.filteredRecords}
                    recordData={this.props.recordData}
                    onAddField={this.props.onAddField}
                    onAddRecord={this.props.onAddRecord}
                    fieldEvents={this.props.fieldEvents}
                    showFieldMenu={this.props.showFieldMenu}
                    changeFieldType={this.props.changeFieldType}
                    changeFieldName={this.props.changeFieldName}
                    onOpenRecordDialog={this.props.onOpenRecordDialog}
                    recordDialogIndex={this.props.recordDialogIndex}
                    onKeyPressComment={this.props.onKeyPressComment}
                    user={this.props.user}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sortedRecords: state.grid.sortedRecords,
        filteredRecords: state.grid.filteredRecords,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(gridActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
