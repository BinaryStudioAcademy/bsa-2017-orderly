import React, {Component} from 'react';
import { Label, Icon, Popup, Button } from 'semantic-ui-react';
import UserProfileShort from '../../../../userProfile/userProfileShort/userProfileShort';
import { formatDateFromNow } from '../../../../../utils/utils';

class CommentItem extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div key={this.props.commentItem._id + ''}
			     className="record-comment-item">
				<div className="record-comment-header">
					<UserProfileShort user={this.props.commentItem.collaborator} showAvatar={true}/>
					<Popup trigger={<Icon name='close' link/>}
					       on='click'
					       position='left center'
						   content={<Button color='red' content='Delete' onClick={() => {
						                this.props.deleteComment(this.props.tableId, this.props.recordId, this.props.commentItem._id)}
						   }/>}	/>
				</div>
				<div className="comment-message">
					<Label pointing color="blue">
						{this.props.commentItem.message}
					</Label>
				</div>
				<div className="record-comment-created">
					{formatDateFromNow(this.props.commentItem.created)}
				</div>
			</div>
		)
	}
}


export default CommentItem;
