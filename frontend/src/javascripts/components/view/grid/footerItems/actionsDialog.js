import React, {Component} from 'react';

import './totalField.scss';

class ActionsDialog extends Component {

    checkType(type) {
        if (type === 'longtext' || type === 'text') {
            return (
                <div>
                    <div className="action" onClick={this.props.strLengthAction}>Total length</div>
                    <div className="action" onClick={this.props.totalAction}>Total items</div>
                </div>
            )
        } else if (type === 'number' || type === 'currency' || type === 'percent') {
            return (
                <div>
                    <div className="action" onClick={this.props.sumAction}>Sum</div>
                    <div className="action" onClick={this.props.avgAction}>Average</div>
                    <div className="action" onClick={this.props.totalAction}>Total items</div>
                </div>
            )
        } else {
            return <div className="action" onClick={this.props.totalAction}>Total items</div>
        }
    }

    render() {

        return (
            <div>
                {this.checkType(this.props.typeValue)}
            </div>
        )
    }
}
        
export default ActionsDialog;