import React, {Component} from 'react';
import GridHeader from './gridHeader';
import GridContent from './gridContent';
import './grid.scss';

export default class Grid extends Component{
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
                    tables={this.props.tables}
                    sortRecords={this.handleSort}
                    filterRecords={this.handleFilter}
                    removeFilter={this.handleRemoveFilter}
                />
                <GridContent
                    currentTable={this.props.currentTable}
                    recordData={this.props.recordData}
                    addRecord={this.props.addRecord}
                    addField={this.props.addField}
                    deleteField={this.props.deleteField}
                    deleteRecord={this.props.deleteRecord}
                    filteredRecords={this.props.filteredRecords}
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
