import React, {Component} from 'react';
import { Image, Button } from 'semantic-ui-react';
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