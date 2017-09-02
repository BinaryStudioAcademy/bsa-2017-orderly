import React, { Component } from 'react';
import { Input, Dropdown } from 'semantic-ui-react';
import Select from 'react-select';
import SingleSelectType from './fieldMenuSingleSelect'

const numOptions = [
    { value: '0', label: '1' },
    { value: '1', label: '1.0' },
    { value: '2', label: '1.00' },
    { value: '3', label: '1.000' },
    { value: '4', label: '1.0000' },
    { value: '5', label: '1.00000' }
];

export class TextType extends Component {
  render(){
    if (this.props.type=='text') {
      return (
        <div className='label-text-wrapper'>
          <div className='label-text'>Default text </div>
            <Input placeholder="Enter default text" />
        </div>
      )
    } else {
        return <div></div>
    }
  }
}

export class NumberType extends Component {
  constructor(props) {
        super(props);
        this.state = {
            precision: ''
        }
    }
  render(){
    if (this.props.type=='number') {
      return (
        <div className='label-text-wrapper'>
          <div className='label-text'>Choose Precision</div>
            <Select selection options={numOptions}
                  value={this.state.precision}
                  onChange = {(event) => {
                    this.setState({precision: event.value});
                    this.props.handleOptionsChange(event);
                  }}
              />
        </div>
      )
    } else {
        return <div></div>
    }
  }
}
