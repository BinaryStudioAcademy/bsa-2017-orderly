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
                <GridHeader onChangeSearch={this.props.onChangeSearch}
                            currentTableId={this.props.currentTable._id}
                            searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                            searchFoundIndex={this.props.searchFoundIndex}
                            onChangeSearchFoundIndex={this.props.onChangeSearchFoundIndex}
                            onToggleSearch={this.props.onToggleSearch}
                            searchBlockOpen={this.props.searchBlockOpen}
                            currentTable={this.props.currentTable}
                            tables={this.props.tables}
                            sortRecords={this.handleSort}
                            filterRecords={this.handleFilter}
                            removeFilter={this.handleRemoveFilter}/>
                <GridContent
                    currentTable={this.props.currentTable}
                    recordData={this.props.recordData}
                    addRecord={this.props.addRecord}
                    addField={this.props.addField}
                    fieldEvents={this.props.fieldEvents}
                    showFieldMenu={this.props.showFieldMenu}
                    changeFieldType={this.props.changeFieldType}
                    changeFieldName={this.props.changeFieldName}
                    onOpenRecordDialog={this.props.onOpenRecordDialog}
                    recordDialogIndex={this.props.recordDialogIndex}
                    onKeyPressComment={this.props.onKeyPressComment}
                    user={this.props.user}
                    searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                    searchFoundIndex={this.props.searchFoundIndex}
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

// sortedRecords={this.props.sortedRecords}
// filteredRecords={this.props.filteredRecords}
