import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from './csvActions';
// import Dropzone from 'react-dropzone';
import Papa from 'papaparse';
import './csvFile.scss'

class ImportCSV extends Component {
  onDrop(files){
    let passJSON = this.props.passJSON;
    let tableId = this.props.currentTableId;
    let currentViewId = this.props.currentViewId;
    let currentViewType= this.props.currentViewType;

    Papa.parse(files[0], {
      skipEmptyLines: true,
      header:false,
      complete(results){

        let data = results.data;
        let fieldsData = data[0];
        let newData = {};
        let fields = [];
        for (let field of fieldsData ) {
          fields[field] = {"name": `${fieldsData[field]}`, "type":"text"}
        }
        data.splice(0, 1);
        let records = [];
        for (let row of data ) {
          let rowData=[];
          for (let cell of data[row]) {
            rowData[cell] = {"data":`${data[row][cell]}`}
          }
          records[row] = {"record_data": rowData}
        }
        newData.fields = fields;
        newData.records = records;
        passJSON(newData, tableId, currentViewId, currentViewType);

      }
    });
  }

  render(){
//<Dropzone className='dropzone' multiple={false} onDrop={this.onDrop.bind(this)}>
//</Dropzone>
      return (
        <div className='dropzone-wrapper'>
            <Icon link name='upload' size="large"/>
            <span className='item__span'>Import from CSV</span>
        </div>
    );
  }
}

export default connect(null, actions)(ImportCSV);
