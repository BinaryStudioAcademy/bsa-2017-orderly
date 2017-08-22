import React, {Component} from 'react';
import GridHeader from './gridHeader';
import GridContent from './gridContent';

export default class Grid extends Component{
    render() {
        return (
            <div>
                <GridHeader/>
                <GridContent
                    currentTable={this.props.currentTable}
                    recordData={this.props.recordData}
                    onAddField={this.props.onAddField}
                    onAddRecord={this.props.onAddRecord}
                    onExpandRecord={this.props.onExpandRecord}
                    expandRecordIndex={this.props.expandRecordIndex}
                />
            </div>
        );
    }
}
