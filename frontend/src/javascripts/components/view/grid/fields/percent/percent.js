import React from 'react';
import { Input } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';
import Field from '../field';
import './percent.scss';

class Percent extends Field {
  constructor(props) {
    super(props, 'percent');
    this.state = {
        percent: this.props.value,
        precision: this.props.currentField.options.percent
    }
}
    componentWillReceiveProps(nextProps) {
        this.setState({
            precision: nextProps.currentField.options.percent
        });
    }
  renderActiveField() {
    return (
        <NumberFormat className='percent-input'
            thousandSeparator={true} suffix={'%'}
            value={this.state.percent}
            onChange={(event) => this.setState({percent: event.target.value})}
            decimalPrecision={this.state.precision}
            onBlur={(event) => this.props.onBlurComponent(this.props.id, event.target.value)}
            autoFocus={this.props.autoFocus}
        />
    )
  }
}

export default Percent;
