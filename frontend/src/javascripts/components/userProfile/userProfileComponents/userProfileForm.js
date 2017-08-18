import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { changeUserData } from '../userProfileActions';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class UserProfileForm extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    
    const formData = {};
    console.log(this.refs)
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);
    this.props.dispatch(changeUserData(this.props.user._id, formData));
  }
  render() {
  return (
  <div className='user-profile-form'>
      <form onSubmit={this.handleSubmit} >
          <div className='form-block'>
            <div className='form-input-block'>
              <label>First name</label>
              <input className='user-profile-form-input' ref='firstName' placeholder='First name'/>
            </div>
            <div className='form-input-block'>
              <label>Last name</label>
              <input className='user-profile-form-input' ref='lastName' placeholder='Last name' />
            </div>
          </div>
          <div className='form-block'>
            <div className='form-input-block'>
              <label>Gender</label>
              <select className='user-profile-form-input' ref='gender' placeholder='Gender'>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className='form-input-block'>
              <label>Birthday</label>
              <input className='user-profile-form-input' ref='birthday' type= 'date' />
            </div>
          </div>
          <div className='form-block'>
            <div className='form-input-block'>
              <label>Country</label>
              <input className='user-profile-form-input' ref='country' placeholder='Country' />
            </div>
            <div className='form-input-block'>
              <label>City</label>
              <input className='user-profile-form-input' ref='city' placeholder='City' />
            </div>
          </div>
          <div className='form-block'>
            <div className='form-input-block'>
              <label>Address</label>
              <input className='user-profile-form-input' ref='address' placeholder='Address' />
            </div>
            <div className='form-input-block'>
              <label>Phone</label>
              <input className='user-profile-form-input' ref='phone' placeholder='Phone' />
            </div>
          </div>
          <div className='user-profile-submit-btn'>
              <Button type='submit'>Update Data</Button>
          </div>
      </form>
  </div>
  );
  }
}

function mapStateToProps(state) {
  return {
    userProfile: state.userProfile,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, changeUserData),  dispatch);
}

export default connect(mapStateToProps, null)(UserProfileForm);