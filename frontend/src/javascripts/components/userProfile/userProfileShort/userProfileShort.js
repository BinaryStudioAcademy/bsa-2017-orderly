import React from 'react';
import { Image } from 'semantic-ui-react';
import avatar from '../../../../images/avatar.png';

const userProfileShort = ({user, showAvatar}) => {

    return (
        <span>
            {showAvatar && <Image src={avatar} avatar />}
            <span className="username">{user.firstName + ' ' + user.lastName}</span>
        </span>
        );
};

export default userProfileShort;