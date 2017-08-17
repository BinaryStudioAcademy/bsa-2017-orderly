import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class UserProfileForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
        <div className='user-profile-form'>
            <Form>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='First name' placeholder='First name' />
                  <Form.Input label='Last name' placeholder='Last name' />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Select label='Gender' options={options} placeholder='Gender' />
                  <Form.Input label='Birthday' type= 'date' />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='Country' placeholder='Country' />
                  <Form.Input label='City' placeholder='City' />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='Address' placeholder='Address' />
                  <Form.Input label='Phone' placeholder='Phone' />
                </Form.Group>
                <div className='user-profile-submit-btn'>
                    <Button type='submit'>Update Data</Button>
                </div>
            </Form>
        </div>
        );
    }
}

export default UserProfileForm