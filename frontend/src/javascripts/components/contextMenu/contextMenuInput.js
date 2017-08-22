import React, { Component } from 'react';
import { Popup, Icon, Input } from 'semantic-ui-react';

class BaseName extends Component {
  constructor(props) {
    super(props);
    this.state ={ name: this.props.base.name }
  }

  render(){
    let input
    return (
      <div>
        <form className='base-name-form'
          onSubmit={e => {
            e.preventDefault()
            this.props.handleClick(input.value, 'name', this.props.base._id)
            input.value = ''
          }}
        >
          <input placeholder="Base Name" className='base-name-input'
            ref={node => {input = node}} 
            value={this.state.name}
            onChange = {(e) => this.setState({ name: e.target.value})}
          />
        </form>
      </div>
    )
  }
}

export default BaseName