import React, {Component} from 'react';
import ExportCSV from '../../../dashboard/csvFile/csvFileExport';
import ImportCSV from '../../../dashboard/csvFile/csvFileImport';
import './extraMenu.scss';

export default class ExtraMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className={this.props.isActive ? "extra__menu" : "hide"}>
                <div className="extra-menu__item">
                    <ImportCSV currentTableId={this.props.currentTableId} tables={this.props.tables}/>
                </div>
                <div className="extra-menu__item">
                    <ExportCSV currentTableId={this.props.currentTableId} tables={this.props.tables}/>
                </div>
            </div>
        );
    }
}
