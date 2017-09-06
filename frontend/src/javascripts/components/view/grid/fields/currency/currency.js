import React from 'react';
import { Input } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';
import Field from '../field';
import './currency.scss';

class CurrencyField  extends Field {
  constructor(props) {
    super(props, 'currency');
    this.state = { 
        currency: this.props.value,
        prefix: this.props.currentField.options.currency || '$'
    }
}
 componentWillReceiveProps(nextProps) {
        this.setState({
            prefix: nextProps.currentField.options.currency
        });
    }
  
  renderActiveField() {
    return (
        <NumberFormat className="currency-input" 
            thousandSeparator={true} prefix={this.state.prefix}
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
