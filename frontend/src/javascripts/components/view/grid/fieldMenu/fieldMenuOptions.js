import React, { Component } from 'react';
import { Input, Dropdown, Checkbox } from 'semantic-ui-react';
import { numOptions, currencySymbols, dateFormats, percentOptions } from "../../../configuration/fieldCustomOptions";
import Select from 'react-select';
import SingleSelectType from './fieldMenuSingleSelect'
import Toggle from 'react-toggle'

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
  }
}

export class PercentType extends Component {
  constructor(props) {
        super(props);
        this.state = {
            precision: ''
        }
    }
  render(){
      return (
        <div className='label-text-wrapper'>
          <div className='label-text'>Choose Precision</div>
            <Select selection options={percentOptions}
                  value={this.state.precision}
                  onChange = {(event) => {
                    this.setState({precision: event.value});
                    this.props.handleOptionsChange(event);
                  }}
              />
        </div>
      )
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
      return (
        <div className='label-text-wrapper'>
          <div className='label-text'>Choose currency</div>
            <Select selection options={currencySymbols}
                  value={this.state.moneyPrefix}
                  onChange = {(event) => {
                    this.setState({moneyPrefix: event.value});    
                    this.props.handleOptionsChange(event);
                  }}
              />
        </div>
      )
  }
}

export class DateType extends Component {
  constructor(props) {
        super(props);
        this.state = {
            format: '',
            time: false
        }

    }
  render(){
      return (
        <div className='label-text-wrapper'>
          <div className='label-text'>Date format</div>
            <Select selection options={dateFormats}
                  value={this.state.format}
                  onChange = {(event) => {
                    this.setState({format: event.value});    
                    this.props.handleOptionsChange(event, 'format');
                  }}
              />
              <div className='options-checkbox'>
                <Checkbox checked={this.state.time} toggle label='Include a time field'
                onChange = {(event, data) => {
                   this.setState({time:!this.state.time})
                   this.props.handleOptionsChange(data, 'time');
                 }}
                  />
              </div>
        </div>
      )
  }
}


export const CustomOptions = ({type, handleOptionsChange}) => {
  switch (type) {
    case 'number': 
      return <NumberType type={type} handleOptionsChange={handleOptionsChange}
      />
    break;
    case 'currency': 
      return <CurrencyType type={type} handleOptionsChange={handleOptionsChange} />
    break;
    case 'date': 
      return <DateType type={type} handleOptionsChange={handleOptionsChange} />
    break;
    case 'percent': 
      return <PercentType type={type} handleOptionsChange={handleOptionsChange} />
    break;
    default:
      return <div></div>
  }
}
