import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import './date.js' 

class UserProfileForm extends Component {
  constructor(props) {
    super(props);

      this.state = { 
        firstName: '',
        lastName: '',
        gender: '',
        birthday: '',
        country: '',
        city: '',
        address: '',
        phone: ''
      }
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  componentWillReceiveProps(nextProps) {
      this.setState({ 
        firstName: nextProps.user.firstName, 
        lastName: nextProps.user.lastName,
        gender: nextProps.user.gender,
        birthday: new Date(Date.parse(nextProps.user.birthday)).customFormat( "#YYYY#-#MM#-#DD#" ),
        country: nextProps.user.country,
        city: nextProps.user.city,
        address: nextProps.user.address,
        phone: nextProps.user.phone
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    this.props.handleSubmitForm(this.props.user._id, formData);
  }

render() {
  return (
    <div className='user-profile-form'>
      <form onSubmit={this.handleSubmit} >
        <div className='form-block'>
          <div className='form-input-block'>
            <label>First name</label>
            <input className='user-profile-form-input' ref='firstName' placeholder='First name'
                onChange = {(e) => this.setState({ firstName: e.target.value})}
                value={this.state.firstName}  />
          </div>
          <div className='form-input-block'>
            <label>Last name</label>
            <input className='user-profile-form-input' ref='lastName'  placeholder='Last name' 
                onChange = {(e) => this.setState({ lastName: e.target.value})}
                value={this.state.lastName}  />
          </div>
        </div>
        <div className='form-block'>
          <div className='form-input-block'>
            <label>Gender</label>
            <select className='user-profile-form-input' ref='gender'  placeholder='Gender'
                onChange = {(e) => this.setState({ gender: e.target.value})}
                value={this.state.gender} >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className='form-input-block'>
            <label>Birthday</label>
            <input className='user-profile-form-input' ref='birthday'  type= 'date' 
                onChange = {(e) => this.setState({ birthday: e.target.value})}
                value={this.state.birthday} />
          </div>
        </div>
        <div className='form-block'>
          <div className='form-input-block'>
            <label>Country</label>
            <input className='user-profile-form-input' ref='country' placeholder='Country' 
                onChange = {(e) => this.setState({ country: e.target.value})}
                value={this.state.country} />
          </div>
          <div className='form-input-block'>
            <label>City</label>
            <input className='user-profile-form-input' ref='city' placeholder='City' 
                onChange = {(e) => this.setState({ city: e.target.value})}
                value={this.state.city} />
          </div>
        </div>
        <div className='form-block'>
          <div className='form-input-block'>
            <label>Address</label>
            <input className='user-profile-form-input' ref='address' placeholder='Address' 
                onChange = {(e) => this.setState({ address: e.target.value})}
                value={this.state.address} />
          </div>
          <div className='form-input-block'>
            <label>Phone</label>
            <input type='number' className='user-profile-form-input' ref='phone' placeholder='Phone' 
                onChange = {(e) => this.setState({ phone: e.target.value})}
                value={this.state.phone} />
          </div>
        </div>
        <div className='user-profile-submit-btn'>
            <Button type='submit'>Update Data</Button>
        </div>
      </form> 
    </div>
    )
  }
}

export default UserProfileForm;