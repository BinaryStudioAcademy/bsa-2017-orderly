import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import avatar from '../../../../images/avatar.png';
import FileInput from 'react-file-input';
import API from '../../../config';

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
    
    let hasExtension = (inputID, exts) => {
      return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(event.target.files[0].name);
    }
    
    let file = event.target.files[0];
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('userId', this.props.user._id)

    if (file.size > 2097152 ) {
      alert ('please upload the photo with the size less than 2MB')
    } else if (!hasExtension(file, ['.jpg', '.gif', '.png'])) {
      alert("Sorry, " + event.target.files[0].name + " is invalid, allowed extensions are: .jpg, .png, and .gif");
    } else {
      this.props.handleFile(data);
    }
  }

  render() {
    return (
      <div className='user-profile-photo-wrapper'>
        <div className='user-profile-photo'>
          <Image src={ this.state.avatar != '' ? 
                        `${API.host}/files/${this.props.user.avatar}`
                        : avatar}
                size='medium' bordered/>
        </div>
        <form>
           <FileInput name="myImage"
              accept=".png,.gif"
              placeholder="My Image"
              className="change-avatar-input"
              onChange={this.handleFile} />
        </form>
      </div>
    );
  }
}

export default UserProfilePhoto