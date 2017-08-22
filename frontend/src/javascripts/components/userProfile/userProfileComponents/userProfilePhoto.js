import React, { Component } from 'react';

class UserProfilePhoto extends Component {
constructor(props) {
    super(props);
    this.props = props;   
    }

handleFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('name', event.target.files[0].name);
    data.append('userId', this.props.user._id)
    let file = event.target.files[0];
    this.props.handleFile(data);
}

  render() {
    return (
      <input type="file" onChange={this.handleFile} />
    );
  }
}

export default UserProfilePhoto