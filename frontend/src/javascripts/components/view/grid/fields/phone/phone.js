import React from 'react';
import NumberFormat from 'react-number-format';
import Field from '../field';
import './phone.scss';

class Phone extends Field {
  constructor(props) {
    super(props);
    this.state = { 
        phone: '' 
    }
}
  
  renderActiveField() {
    return (
        <NumberFormat className='phone-input' 
            thousandSeparator={true}
            format="(###) ###-##-##"
            value={this.state.phone}
            onChange={(event) => this.setState({phone: event.target.value})}
            onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
            autoFocus={true}
        />
    )
  }  
}  

export default Phone;
