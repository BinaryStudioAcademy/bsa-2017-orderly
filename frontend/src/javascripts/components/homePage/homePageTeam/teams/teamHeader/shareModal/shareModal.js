import React, {Component} from 'react';
import { Modal, Input, Dropdown, Button, Icon, Search } from 'semantic-ui-react';
;
import { testEmail } from '../../../../../../utils/utils'

import MemberInfo from '../../memberInfo/memberInfo';
import { getRolesForDropdown, filterFunc } from '../../../../homePageService';
import './shareModal.scss';

const diffCompare = ( user, member) => user._id === member.userId

let searchId = 0

const resultRenderer = (user, title=++searchId) => {
	return (
		<div key={title}>
			<MemberInfo collaborator={user} />
		</div>
	)
}

class ShareModal extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			isLoading: false,
			usersListForSearch: [],
			results: [],
			value: '',
			role: 'readOnly',
			message: ''
		}
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleResultSelect = this.handleResultSelect.bind(this);
		this.resetComponent = this.resetComponent.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			usersListForSearch: R.differenceWith(diffCompare, nextProps.allUsers, this.props.team.collaborators)
		})
	}

	componentWillMount() {
		if(R.isEmpty(this.props.allUsers)) this.props.getAllUsers()
	}

	resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

	handleSearchChange(event, { value }) {
		this.setState({
			isLoading: true,
			value: value,
			results: this.state.usersListForSearch })

		this.setState({
			isLoading: false,
			results: R.filter(filterFunc(value))(this.state.usersListForSearch),
		})
	}

	handleResultSelect(event, {result}) {
		this.setState({
			isLoading: false,
			value: result.email
		})
	}

	render() {
		const props = this.props;

		return (
			<Modal className='share_modal'
			       onClose={() => {
			       	   props.changeActiveShareModal('')
			           this.resetComponent()
			       }}
			       open={props.activeShareModal === props.team._id}
			       closeIcon='close'>
				<Modal.Header className='share_modal_header'>
					{props.team.name} team sharing
				</Modal.Header>
				<Modal.Content className='share_modal_content'>
					<h5>
						This team has {props.team.collaborators.length} member{props.team.collaborators.length > 1 ? 's' : ''}.
						Adding a team member will give them access to all bases within this team.
					</h5>
					<div className='share_modal_main'>

						<div onChange={ (event) => {
							console.log(event.target.value)
						}}
						     className='modal_radio_btn'>
							<input type='radio'
							       defaultChecked
							       value='EMAIL'
							       name='invite'
							       id='byemail'/>
							<label htmlFor='byemail'>Invite by email</label>

							{/*<input type='radio'*/}
							       {/*value='LINK'*/}
							       {/*name='invite'*/}
							       {/*id='bylink'/>*/}
							{/*<label htmlFor='bylink'>Invite by link</label>*/}
						</div>

						<div className='modal_main_email'>
							<div className='modal_main_row'>
								<Search loading={this.state.isLoading}
								        fluid={true}
								        results={this.state.results}
								        value={this.state.value}
								        onResultSelect={this.handleResultSelect}
								        onSearchChange={this.handleSearchChange}
								        resultRenderer={resultRenderer}
								        placeholder='Invite more team members via email'/>
								<Dropdown selection
								          onChange={ (event, data) => {
									        this.setState({role: data.value})
								          }}
								          className='role_dropdown'
								          defaultValue={'readOnly'}
								          options={getRolesForDropdown()}/>
							</div>
							<div className='modal_main_row'>
								<Input placeholder='Add a message(optional)'
								       onChange={(event) => {
								       	    this.setState({message: event.target.value})
								       }}
								       disabled={!this.state.value} />
								<Button primary
								        disabled={!this.state.value}
								        onClick={() => {
								        	const state = this.state;
								        	const member = R.find(R.propEq('email', state.value))(state.usersListForSearch)
									        if (member) {
								        		this.props.addCollaborator(this.props.team._id, member._id, state.role, state.message)
										        this.resetComponent()
										        this.setState({role: 'readOnly', message: ''})
									        } else {
								        		if (testEmail(this.state.value)) {

										        }
									        }
								        }}
								>Add member</Button>
							</div>
						</div>
						<div className='modal_main_link'/>
					</div>
					<div className='team_members'>
						<h4>Team members</h4>
						{R.map(user => {
							if (!R.isEmpty(props.collaborators)) {
								const collaborator = R.path([props.team._id, user.userId], props.collaborators)
								return (
									<div key={user.userId} className='member_wrapper'>
										<MemberInfo collaborator={collaborator} />
										<div className='role_settings'>
											<Dropdown selection
											          disabled={user.role === 'owner'}
											          className='role_dropdown'
											          defaultValue={user.role}
											          onChange={(event, data) => {
											          	this.props.updateCollaboratorRole(this.props.team._id, user.userId, data.value)
											          }}
											          options={getRolesForDropdown()}/>
											{user.role !== 'owner' ? <Icon className='delete_icon'
											                               onClick={() => {
											                               	    this.props.deleteCollaborator(this.props.team._id, user.userId)
											                               }}
											                               link
											                               name='close'/> : '' }
										</div>
									</div>
								)
							}
						} )(props.team.collaborators)}
					</div>
				</Modal.Content>
			</Modal>
		)
	}
}

export default ShareModal;