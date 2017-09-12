import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import importIcon from '../../../../../images/upload_icon.png'
import ImportSpreadsheet from './importSpreadsheet'


const ModalImportSpreadsheet = (props) => (
  <Modal trigger={<div className='options'> 
                  <img src={importIcon} />
                  <div className='text'>Import a spreadsheet</div>
                </div>} closeIcon>
    <Header icon={<Icon name='cloud upload' color='blue'/>} content='Import a spreadsheet' />
    <Modal.Content>
      <div className='content-import-spreadsheet'>
          <div className='content-import-subheader'>Import a CSV</div>
          <div className='content-import-text'>You can import a table into Airtable by uploading a .CSV file 
            with tabular data. Most spreadsheet applications will allow you to export your spreadsheet as a .CSV file.
          <div className='content-import-subtext'>You can choose files one by one to add several bases.</div>
          </div>
          <div className='content-import-btn'><ImportSpreadsheet teamId={props.teamId}/></div>
      </div>
    </Modal.Content>
  </Modal>
)

export default ModalImportSpreadsheet
