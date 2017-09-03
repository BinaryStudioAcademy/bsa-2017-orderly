import React, { Component } from 'react';
import { Input, Dropdown } from 'semantic-ui-react';
import { numOptions, currencySymbols } from "../../../configuration/fieldCustomOptions";
import Select from 'react-select';
import SingleSelectType from './fieldMenuSingleSelect'

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

export class CurrencyType extends Component {
  constructor(props) {
        super(props);
        this.state = {
            moneyPrefix: ''
        }
    }
  render(){
    if (this.props.type=='currency') {
      return (
        <div className='label-text-wrapper'>
          <div className='label-text'>Choose Precision</div>
            <Select selection options={currencySymbols}
                  value={this.state.moneyPrefix}
                  onChange = {(event) => {
                    this.setState({moneyPrefix: event.value});
                    console.log(this.props)
    
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
