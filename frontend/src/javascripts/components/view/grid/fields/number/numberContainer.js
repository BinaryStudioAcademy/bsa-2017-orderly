import React/*, { PropTypes }*/ from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NumberActions from './numberActions';

import Number from './number';

class NumberContainer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.selectedHandler = this.selectedHandler.bind(this);
        this.activateHandler = this.activateHandler.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.blurFieldHandler = this.blurFieldHandler.bind(this);
        this.blurComponentHandler = this.blurComponentHandler.bind(this);
    }

    selectedHandler() {
        this.props.selectedField();
    }

    keyDownHandler(e) {
        if (!this.props.number.active) {
            this.props.activateClearField();
            this.props.activateField();
        }
        if (this.props.number.active) {
            if (e.keyCode === 13) {
                if (!this.props.number.typeInteger) {
                    let n =+this.props.number.value;
                    this.props.changeField(n.toFixed(this.props.number.precisionValue));
                }
                this.props.blurComponent();
            }
        }
    }

    activateHandler() {
        this.props.activateField();
    }

    changeHandler(value) {
        let regExp;
        this.props.number.typeInteger ?
            regExp = /^[0-9\b]+$/ :
            regExp = /^\d+(\.\d{2})?|\.\d{2}$/;

        if (value === '' || regExp.test(value)) {
            this.props.changeField(value);
        }
    }

    blurFieldHandler() {
        this.props.blurField();
    }

    blurComponentHandler() {
        if (!this.props.number.typeInteger) {
            let n =+this.props.number.value;
            this.props.changeField(n.toFixed(this.props.number.precisionValue));
        }
        this.props.blurComponent();
    }

    render() {
        return (
            <div className="table-cell-container">
                <Number value={this.props.number.value}
                          selected={this.props.number.selected}
                          active={this.props.number.active}
                          onSelected={this.selectedHandler}
                          onActivate={this.activateHandler}
                          onKeyDown={this.keyDownHandler}
                          onChange={this.changeHandler}
                          onBlurField={this.blurFieldHandler}
                          onBlurComponent={this.blurComponentHandler}
                >
                </Number>
            </div>
        )}
}
/*
NumberContainer.propTypes = {
    selectedHandler: PropTypes.func.isRequired,
    activateHandler: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired,
    blurFieldHandler: PropTypes.func.isRequired,
    blurComponentHandler: PropTypes.func.isRequired,
    number: PropTypes.object.isRequired
};
*/
function mapStateToProps(state) {
    return {
        number: state.numberReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, NumberActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberContainer);