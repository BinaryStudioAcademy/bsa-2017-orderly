import React from 'react';
import FileInput from 'react-file-input';
import { Image, Modal } from 'semantic-ui-react';
import R from 'ramda';

import Field from '../field';
import './attachment.scss';

const bgImage = (urlImage) => ({
	backgroundImage: `url(${urlImage})`
})

class Attachment extends Field {
	constructor(props) {
		super(props, 'attachment')
		this.state = {
			imageModalOpen: false
		}
	}

	handleOpen = (event) => {
		event.preventDefault()
		event.stopPropagation()
		this.setState({imageModalOpen: true})
	}

	handleClose = () => this.setState({imageModalOpen: false})

	handleFile = (event) => {
		const file = event.target.files[0];
		let type;
		if (R.test(/^image/, file.type)) type = 'image';
		else {
			alert ('please upload the file in accepted format (image)')
			return
		}
		const fd = new FormData()
		fd.append('attachment', file)
		this.props.uploadAttachment(fd, type, this.props.id, this.props.tableId)
	}

	renderField() {
		return (
			<div className='attachment_default'>
				<div style={bgImage(`http://localhost:2020/files/attachment/${this.props.id}/image/${this.props.value}`)}
					 className='image_icon'/>
			</div>
		)
	}

	fieldSelectedClass() {
		return '';
	}

	fieldActiveClass() {
		return '';
	}

	renderSelectedField() {
		return this.renderField()
	}

	renderActiveField() {
		return (
			<div className='attachment_cell' >
				<div className="attachment_selected" >
					<FileInput name="attachment"
					           accept="image/*"
					           onChange={this.handleFile}
					           className="add_file_btn"/>
					<Image size='mini'
					       onClick={this.handleOpen}
					       className='attachment_file'
					       src={`http://localhost:2020/files/attachment/${this.props.id}/image/${this.props.value}`} />
				</div>
				<Modal
					open={this.state.imageModalOpen}
					onClose={this.handleClose}
					basic
					closeOnDimmerClick={true}
					size='small'
				>
					<Modal.Content className='image_modal_content'>
				       <div style={bgImage(`http://localhost:2020/files/attachment/${this.props.id}/image/${this.props.value}`)}
				            className='image_modal'/>
					</Modal.Content>
					<Modal.Actions>
					</Modal.Actions>
				</Modal>
			</div>
		)
	}
}

export default Attachment;