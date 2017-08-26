import React, {Component} from 'react';
import GridHeader from './gridHeader';
import GridContent from './gridContent';
import './grid.scss';

export default class Grid extends Component{
    render() {
        return (
            <div className="grid-view">
                <GridHeader/>
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
                />
            </div>
        );
    }
}
