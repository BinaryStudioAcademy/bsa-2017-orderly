import React, { Component } from 'react'
import { Modal, Button, Radio, Icon } from 'semantic-ui-react'


import './stackedModal.scss'

let radioValue

const RadioBtn = ({_id, name}) => (
	<div className='radio_btn'>
		<input value={_id}
		       name='stackedBy'
		       id={_id}
		       type='radio' />
		<label htmlFor={_id}>{name}</label>
	</div>
)

const ModalBody = ({ stackedFields }) => {
	if (R.isEmpty(stackedFields)) return (<h4>No field with type "select"</h4>)
	else {
		return (
			<Modal.Content>
				<div onChange={(event) => {
					radioValue = event.target.value
				}}
				     className='stacked_radio_block'>
					{R.map(field => <RadioBtn _id={field._id}
					                          name={field.name}
					                          key={field._id}/>)(stackedFields)}
				</div>

			</Modal.Content>
		)
	}
}

class StackedModal extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Modal className='stack_modal' size='mini'
			       onClose={this.props.closeStackModal}
			       open={this.props.isStackedModalOpen}>
				<Modal.Header>
					Choose a grouping field
				</Modal.Header>
				<ModalBody stackedFields={this.props.stackedFields}/>
				<Modal.Actions>
					<Button negative onClick={this.props.closeStackModal}>No</Button>
					<Button positive
					        onClick={() => {
					        	if (radioValue) {
							        this.props.chooseStackedField(radioValue)
							        this.props.closeStackModal()
							        radioValue = ''
						        }
					        }}
					        labelPosition='right'
					        content='Yes'
					        icon='checkmark' />
				</Modal.Actions>
			</Modal>
		)
	}
}

export default StackedModal
