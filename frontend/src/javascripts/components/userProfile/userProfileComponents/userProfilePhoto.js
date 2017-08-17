import React, {Component} from 'react';
import { Image, Button } from 'semantic-ui-react';
// import { FileUpload } from 'redux-file-upload'
import avatar from '../../../../images/avatar.png';

class UserProfilePhoto extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
        <div className='user-profile-photo-wrapper'>
            <div className='user-profile-photo'>
                <Image src={avatar} size='medium' bordered/>
            </div>
            <div className='user-profile-change-photo-button'>
                  <Button>
                    Change Photo
                  </Button>
            </div>
        </div>
        );
    }
}

export default UserProfilePhoto
// <FileUpload
//   allowedFileTypes={['jpg', 'pdf']}
//   data={{ type: 'picture' }}
//   dropzoneId="fileUpload"
//   url="https:/url.org/api/docs/upload"
// >
// </FileUpload>