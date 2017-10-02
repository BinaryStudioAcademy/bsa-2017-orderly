import React, {Component} from 'react';
import GridHeader from './gridHeader';
import GridContent from './gridContent';
import GridFooter from './gridFooter';
import './grid.scss';

export default class Grid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid-view">
                <GridHeader
	                isReadOnly={this.props.currentRole === 'readOnly'}
                    currentViewId={this.props.currentViewId}
                    updateViewHideField={this.props.updateViewHideField}
                    onChangeSearch={this.props.onChangeSearch}
                    currentTableId={this.props.currentTable._id}
                    currentView={this.props.currentTable.currentView}
                    searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                    searchFoundIndex={this.props.searchFoundIndex}
                    onChangeSearchFoundIndex={this.props.onChangeSearchFoundIndex}
                    onToggleSearch={this.props.onToggleSearch}
                    searchBlockOpen={this.props.searchBlockOpen}
                    currentTable={this.props.currentTable}
                    tables={this.props.tables}
                    deleteView={this.props.deleteView}
                    viewsCount={this.props.viewsCount}
                    currentViewType={this.props.currentViewType}
                    addFilter={this.props.addFilter}
                    updateFilter={this.props.updateFilter}
                    removeFilter={this.props.removeFilter}
                    removeAllFilters={this.props.removeAllFilters}
                    addSort={this.props.addSort}
                    updateSort={this.props.updateSort}
                    removeSort={this.props.removeSort}
                    removeAllSorts={this.props.removeAllSorts}
                />
                <GridContent
	                deleteComment={this.props.deleteComment}
	                isReadOnly={this.props.currentRole === 'readOnly'}
	                currentRole={this.props.currentRole}
                    currentViewId={this.props.currentViewId}
                    currentTable={this.props.currentTable}
                    recordData={this.props.recordData}
                    addRecord={this.props.addRecord}
                    addField={this.props.addField}
                    deleteField={this.props.deleteField}
                    deleteRecord={this.props.deleteRecord}
                    fieldEvents={this.props.fieldEvents}
                    changeFieldType={this.props.changeFieldType}
                    changeFieldName={this.props.changeFieldName}
                    changeFieldOptions={this.props.changeFieldOptions}
                    onOpenRecordDialog={this.props.onOpenRecordDialog}
                    recordDialogIndex={this.props.recordDialogIndex}
                    onKeyPressComment={this.props.onKeyPressComment}
                    uploadAttachment={this.props.uploadAttachment}
                    deleteFile={this.props.deleteFile}
                    user={this.props.user}
                    searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                    searchFoundIndex={this.props.searchFoundIndex}
                    setSelectFieldRecordItems={this.props.setSelectFieldRecordItems}
                    appendSelectFieldRecordItems={this.props.appendSelectFieldRecordItems}
                    onSetSelectAllRecordItems={this.props.setSelectAllRecordItems}
                    selectedRecordItemList={this.props.selectedRecordItemList}
                />
                <GridFooter 
                    currentTable={this.props.currentTable}
                />
            </div>
        );
    }
}
