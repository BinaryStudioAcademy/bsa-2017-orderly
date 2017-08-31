import React, {Component} from 'react';
import GridHeader from './gridHeader';
import GridContent from './gridContent';

export default class Grid extends Component{
    render() {
        return (
            <div>
                <GridHeader onChangeSearch={this.props.onChangeSearch}
                            currentTableId={this.props.currentTable._id}
                            searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                            searchFoundIndex={this.props.searchFoundIndex}
                            onChangeSearchFoundIndex={this.props.onChangeSearchFoundIndex}
                            onToggleSearch={this.props.onToggleSearch}
                            searchBlockOpen={this.props.searchBlockOpen}/>
                <GridContent
                    currentTable={this.props.currentTable}
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
                    searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                    searchFoundIndex={this.props.searchFoundIndex}
                />
            </div>
        );
    }
}
