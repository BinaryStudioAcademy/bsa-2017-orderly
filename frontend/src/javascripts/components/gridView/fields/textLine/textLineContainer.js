import React/*, { PropTypes }*/ from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TextLineActions from './textLineActions';

import TextLine from './textLine';

class TextLineContainer extends React.Component {

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

    keyDownHandler() {
        if (!this.props.textLine.active) {
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

    render() {
        return (
            <div className="table-cell-container">
            <TextLine value={this.props.textLine.value}
                      selected={this.props.textLine.selected}
                      active={this.props.textLine.active}
                      onSelected={this.selectedHandler}
                      onActivate={this.activateHandler}
                      onKeyDown={this.keyDownHandler}
                      onChange={this.changeHandler}
                      onBlurField={this.blurFieldHandler}
                      onBlurComponent={this.blurComponentHandler}
            >
            </TextLine>
            </div>
        )}
}
/*
TextLineContainer.propTypes = {
    selectedHandler: PropTypes.func.isRequired,
    activateHandler: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired,
    blurFieldHandler: PropTypes.func.isRequired,
    blurComponentHandler: PropTypes.func.isRequired,
    textLine: PropTypes.object.isRequired
};
*/
function mapStateToProps(state) {
    return {
        textLine: state.textLineReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, TextLineActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TextLineContainer);