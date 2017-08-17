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
         console.log(this.props)
        return (
        <div className='user-profile-form'>
            <Form onSubmit={e => {
              e.preventDefault()
              this.props.handleSubmit(this.props.user)
              }} 
              >
                <Form.Group unstackable widths={2}>
                  <Form.Input label='First name' placeholder='First name' onChange={(e) => this.props.handleInput(e.target.value)} />
                  <Form.Input label='Last name' placeholder='Last name' onChange={(e) => this.props.handleInput(e.target.value)} />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Select label='Gender' options={options} placeholder='Gender' onChange={(e) => this.props.handleInput(e.target.value)} />
                  <Form.Input label='Birthday' type= 'date' onChange={(e) => this.props.handleInput(e.target.value)} />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='Country' placeholder='Country' onChange={(e) => this.props.handleInput(e.target.value)} />
                  <Form.Input label='City' placeholder='City' onChange={(e) => this.props.handleInput(e.target.value)} />
                </Form.Group>
                <Form.Group unstackable widths={2}>
                  <Form.Input label='Address' placeholder='Address' onChange={(e) => this.props.handleInput(e.target.value)} />
                  <Form.Input label='Phone' placeholder='Phone' onChange={(e) => this.props.handleInput(e.target.value)} />
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


// <form className='base-name-form'
//         onSubmit={e => {
//           e.preventDefault()
//           props.handleClick(input.value, 'name', props.baseId)
//           input.value = ''
//         }}
//       >
//         <input placeholder="Base Name" className='base-name-input'
//           ref={node => {
//             input = node
//           }}
//         />
//       </form>
//     </div>