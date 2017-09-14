import React, { Component } from 'react'
import { Image } from 'semantic-ui-react';
import avatar from '../../../../../../images/avatar.png';
import MemberInfo from '../../../../homePage/homePageTeam/teams/memberInfo/memberInfo'
import { getRolesColor } from '../../../../homePage/homePageService'
import API from '../../../../../config';

import './coworker.scss'


class Coworker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isShowPopup: false
		}
	}

	showPopup = () => {this.setState({isShowPopup: true})}
	hidePopup = () => {this.setState({isShowPopup: false})}

	render() {
		return (
			<span className='collaboration_item'>
				<Image className='collaborator_logo'
				       avatar
				       onMouseOver={this.showPopup}
				       onMouseLeave={this.hidePopup}
				       src={ this.props.user.avatar ? `${API.host}/files/${this.props.user.avatar}` : avatar}/>
				<div style={{display: this.state.isShowPopup ? 'block' : 'none', top: '25px'}} className='user_info_popup'>
					<MemberInfo collaborator={this.props.user}/>
					<div className='popup_footer'>
				<div className='footer_status'>
					<div style={{backgroundColor: 'green'}}	className='user_status'/>
					online
				</div>
				<div style={getRolesColor(this.props.member.role)} className='footer_role'>{this.props.member.role}</div>
			</div>
				</div>
			</span>
		)
	}

}

export default Coworker