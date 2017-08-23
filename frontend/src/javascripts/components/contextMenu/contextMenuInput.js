import React, { Component } from 'react';
import { Popup, Icon, Input } from 'semantic-ui-react';

class BaseName extends Component {
  constructor(props) {
    super(props);
    this.state ={ name: '' }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
        name: nextProps.base ? nextProps.base.name : ''
    })
  }
  render(){
    let input
    return (
      <div>
        <form className='base-name-form'
          onSubmit={e => {
            e.preventDefault()
            this.props.handleClick(this.state.name, 'name', this.props.base._id)
          }}
        >
          <input placeholder="Base Name" className='base-name-input'
            value={this.state.name}
            onChange = {(e) => this.setState({ name: e.target.value})}
          />
        </form>
      </div>
    )
  }
}

export default BaseName