import React, { Component } from 'react';
import { Input, Dropdown } from 'semantic-ui-react';

const numOptions = [
    { key: '0', value: '0', text: '1' },
    { key: '1', value: '1', text: '1.0' },
    { key: '2', value: '2', text: '1.00' },
    { key: '3', value: '3', text: '1.000' },
    { key: '4', value: '4', text: '1.0000' },
    { key: '5', value: '5', text: '1.00000' }
];

export class TextType extends Component {
  render(){
    return (
      <div className='label-text-wrapper'>
        <div className='label-text'>Default text </div>
          <Input placeholder="Enter default text" />
      </div>
    )
  }
}

export class NumberType extends Component {
  render(){
    return (
      <div className='label-text-wrapper'>
        <div className='label-text'>Choose Precision</div>
          <Dropdown selection options={numOptions} />
      </div>
    )
  }
}