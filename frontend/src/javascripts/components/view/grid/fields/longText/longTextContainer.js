import React/*, { PropTypes }*/ from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LongTextActions from './longTextActions';

import LongText from './longText';

class LongTextContainer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.selectedHandler = this.selectedHandler.bind(this);
        this.activateHandler = this.activateHandler.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.blurFieldHandler = this.blurFieldHandler.bind(this);
        this.blurComponentHandler = this.blurComponentHandler.bind(this);
        this.expandFieldClickHandler = this.expandFieldClickHandler.bind(this);
    }

    selectedHandler() {
        this.props.selectedField();
    }

    keyDownHandler() {
        if (!this.props.longText.active) {
            this.props.activateClearField();
            this.props.activateField();
        }
    }

    activateHandler() {
        this.props.activateField();
    }

    changeHandler(value) {
        this.props.changeField(value);
    }

    blurFieldHandler() {
        this.props.blurField();
    }

    blurComponentHandler() {
        this.props.blurComponent();
    }

    expandFieldClickHandler() {
        this.props.expandFieldClick();
    }

    render() {
        return (
            <div className="table-cell-container">
                <LongText value={this.props.longText.value}
                          selected={this.props.longText.selected}
                          active={this.props.longText.active}
                          onSelected={this.selectedHandler}
                          onActivate={this.activateHandler}
                          onKeyDown={this.keyDownHandler}
                          onChange={this.changeHandler}
                          onBlurField={this.blurFieldHandler}
                          onBlurComponent={this.blurComponentHandler}
                          expandFieldClick={this.expandFieldClickHandler}
                >
                </LongText>
            </div>
        )}
}
/*
LongTextContainer.propTypes = {
    selectedHandler: PropTypes.func.isRequired,
    activateHandler: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired,
    blurFieldHandler: PropTypes.func.isRequired,
    blurComponentHandler: PropTypes.func.isRequired,
    longText: PropTypes.object.isRequired
};
*/
function mapStateToProps(state) {
    return {
        longText: state.longTextReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LongTextActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LongTextContainer);