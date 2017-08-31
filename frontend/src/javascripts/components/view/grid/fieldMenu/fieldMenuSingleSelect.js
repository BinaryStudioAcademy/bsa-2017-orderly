import React, { Component } from 'react';

export class SingleSelectType extends Component {

  render(){
    return (
      <div className='label-text-wrapper'>
          <form onSubmit = {this.props.handleOptionsSubmit} >
            <input placeholder="Add option" className='option-input'
                    onChange = {this.props.handleOptionsChange} ref='input'/>
            <input type="submit" value = '+' className='option-input-btn'/>
          </form>
          <ul className='option-list'>
          { this.props.fieldOptionsSS.map((option, current) => {
            return (
              <li className='option-list-item' key={current}>{option}
                  <div onClick = {this.props.handleOptionsDelete.bind(null, option)} 
                    className='delete-option'>
                    x
                  </div>
              </li>
            )
        })}
          </ul>
      </div>
    )
  }
}

