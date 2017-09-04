import React from 'react';
import { Input } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';
import Field from '../field';
import './currency.scss';

class CurrencyField  extends Field {
  constructor(props) {
    super(props);
    this.state = { 
        currency: this.props.value
    }
}
  
  renderActiveField() {
    return (
        <NumberFormat className="currency-input" 
            thousandSeparator={true} prefix={'$'} 
            value={this.state.currency}
            onChange={(event) => this.setState({currency: event.target.value})}
            decimalPrecision={2}
            onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
            autoFocus={this.props.autoFocus}
        />
    )
  }  
}  

export default CurrencyField;
