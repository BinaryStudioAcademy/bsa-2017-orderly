import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from './csvImportAction';
import Dropzone from 'react-dropzone';
import Papa from 'papaparse';

class ImportSpreadsheet extends Component {
  onDrop(file){
    let passJSON = this.props.passJSON;
    let teamId = this.props.teamId
     
     Papa.parse(file[0], {
      skipEmptyLines: true,
      header:false,
      complete(results){

        let data = results.data;
        let fieldsData = data[0];
        let newData = {};
        let fields = [];
        for (let field in fieldsData ) {
          fields[field] = {"name": `${fieldsData[field]}`}
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
        passJSON(newData, teamId);
      }
    });
  }

  render(){
    return (
      <div className='dropzone-wrapper'>
        <Dropzone className='dropzone' multiple={false} onDrop={this.onDrop.bind(this)}>
          <Button color='blue'><Icon name='arrow circle up' />Choose a .CSV file</Button>
        </Dropzone>
      </div>
    );
  }
}

export default connect(null, actions)(ImportSpreadsheet);