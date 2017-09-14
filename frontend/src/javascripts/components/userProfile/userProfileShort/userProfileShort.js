import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import avatar from '../../../../images/avatar.png';
import AppConfig from '../../../config';

class userProfileShort extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            avatar: this.props.user.avatar ? this.props.user.avatar : ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.setState({
                avatar: nextProps.user.avatar ? nextProps.user.avatar : ''
            })
        }
    }

    render() {
        return (
            <span>
                {this.props.showAvatar &&
                <Image  src={
                    this.state.avatar != '' ?
                        `${AppConfig.host}/files/${this.props.user.avatar}`
                        : avatar}
                        avatar
                />}
                <span className="username">{this.props.user.firstName + ' ' + this.props.user.lastName}</span>
            </span>
        )
    };
}

export default userProfileShort;
// import React from 'react';
// import { Image } from 'semantic-ui-react';
// import avatar from '../../../../images/avatar.png';
//
// const userProfileShort = ({user, showAvatar}) => {
//
//     return (
//         <span>
//             {showAvatar && <Image src={avatar} avatar />}
//             <span className="username">{user.firstName + ' ' + user.lastName}</span>
//         </span>
//         );
// };
//
// export default userProfileShort;