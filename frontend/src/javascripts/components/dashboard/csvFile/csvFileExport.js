import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { CSVLink } from 'react-csv';
import './csvFile.scss'

class ExportCSV extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            csvRow : ""
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.tables && nextProps.tables[0].records) {
            var lookup = {};
            for (var i = 0, len = nextProps.tables.length; i < len; i++) {
                lookup[nextProps.tables[i]._id] = nextProps.tables[i];
            }

            let table = lookup[nextProps.currentTableId];

            let fields = [];
            let recordsData = [];
            
            for (let field in table.fields) {
                fields[field] = table.fields[field].name;
            }


            for (let row in table.records) {
                let rowData=[];
                for (let cell in table.records[row].record_data) {
                    rowData[cell] = table.records[row].record_data[cell].data;
                }
                recordsData[row] = rowData
            }
            recordsData.splice(0, 0, fields);

            this.setState({
                csvRow : recordsData
            })
        }
    }
    render() {
        return(
            <div className='download-csv'>
                <CSVLink filename={"my-file.csv"} data={this.state.csvRow} separator={";"}>
                    <Icon link name='upload' size='large'/>
                    <span>Export to CSV</span>
                </CSVLink>
            </div>
        )
    }
}

export default ExportCSV;