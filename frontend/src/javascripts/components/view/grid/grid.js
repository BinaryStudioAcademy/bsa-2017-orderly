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
                    fieldsRecords={this.props.fieldsRecords}
                    onAddField={this.props.onAddField}
                    onAddRecord={this.props.onAddRecord}
                    fieldEvents={this.props.fieldEvents}
                />
            </div>
        );
    }
}
