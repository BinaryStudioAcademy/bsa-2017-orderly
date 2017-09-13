import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from './csvActions';
import Dropzone from 'react-dropzone';
import Papa from 'papaparse';
import './csvFile.scss'

class ImportCSV extends Component {
  onDrop(file){
    let passJSON = this.props.passJSON;
    let tableId = this.props.currentTableId
    
    Papa.parse(file[0], {
      skipEmptyLines: true,
      header:false,
      complete(results){

        let data = results.data;
        let fieldsData = data[0];
        let newData = {};
        let fields = [];
        for (let field in fieldsData ) {
          fields[field] = {"name": `${fieldsData[field]}`, "type":"text"}
        }
        data.splice(0, 1);
        let records = [];
        for (let row in data ) {
          let rowData=[]
          for (let cell in data[row]) {
            rowData[cell] = {"data":`${data[row][cell]}`}
          }
          records[row] = {"record_data": rowData} 
        }
        newData.fields = fields;
        newData.records = records;
        console.log(newData)
        passJSON(newData, tableId);
        
      }
    });
  }

  render(){
    return (
      <div className='dropzone-wrapper'>
        <Dropzone className='dropzone' multiple={false} onDrop={this.onDrop.bind(this)}>
          <Icon link name='upload' size="large"/>
            <span className='item__span'>Import from CSV</span>
        </Dropzone>
      </div>
    );
  }
}

export default connect(null, actions)(ImportCSV);