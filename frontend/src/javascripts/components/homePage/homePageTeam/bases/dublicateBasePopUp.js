import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Select from 'react-select';
import ImportSpreadsheet from './importSpreadsheet'

class ModalDublicateBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: this.props.teamNames,
            teamId:''
        }
    }

    render() {
    return (
      <Modal size='tiny' trigger={<li className = 'base-options-list-item'>
                     <Icon name='copy' className='icon' color='black' size='small'/>
                        Duplicate base</li>} closeIcon>
        <Header icon={<Icon name='copy' color='blue'/>} content={`Duplicate ${this.props.base.name}`} />
        <Modal.Content>
          <div className='content-import-spreadsheet'>
              <div className='content-import-subheader'>Choose team:</div>
              <Select options={this.state.options}
                    value={this.state.value}
                    onChange = {(event) => this.setState({teamId: event.value})}
                    autoFocus={true}
                />
              <div className='content-import-btn' 
              onClick={()=> this.props.handleClick(this.state.teamId, 'clone', this.props.base._id, this.props.base, this.    props.tables )}>
              <Button>Duplicate base</Button></div>
          </div>
        </Modal.Content>
      </Modal>
    )
    }
}

export default ModalDublicateBase
