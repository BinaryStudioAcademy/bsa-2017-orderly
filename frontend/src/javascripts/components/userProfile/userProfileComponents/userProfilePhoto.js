import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import avatar from '../../../../images/avatar.png';

class UserProfilePhoto extends Component {
constructor(props) {
    super(props);
    this.props = props; 
    this.state = {
            avatar: ''
        }  
    }
    
  componentWillReceiveProps(nextProps) {
      this.setState({ 
      avatar: nextProps.user.avatar ? nextProps.user.avatar : '' 
      })
  }

  handleFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('userId', this.props.user._id)
    let file = event.target.files[0];
    this.props.handleFile(data);
  }

  render() {
    return (
      <div className='user-profile-photo-wrapper'>
        <div className='user-profile-photo'>
          <Image src={ this.state.avatar != '' ? 
                        `http://localhost:2020/files/${this.props.user.avatar}` 
                        : avatar}
                size='medium' bordered/>
        </div>
          <input className='change-avatar-input' type="file" onChange={this.handleFile} />
      </div>
    );
  }
}

export default UserProfilePhoto