import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import './date.js' 

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class UserProfileForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);

    if ( this.props.user) { 
      let date = Date.parse(this.props.user.birthday)
      this.state = {
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        gender: this.props.user.gender,
        birthday: new Date(Date.parse(this.props.user.birthday)).customFormat( "#YYYY#-#MM#-#DD#" ),
        country: this.props.user.country,
        city: this.props.user.city,
        address: this.props.user.address,
        phone: this.props.user.phone
      } 
    } else {
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
    }
  }

  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    
    const formData = {};
    console.log(this.refs)
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