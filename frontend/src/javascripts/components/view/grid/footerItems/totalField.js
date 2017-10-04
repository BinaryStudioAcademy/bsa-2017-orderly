import React, {Component} from 'react';
import ActionsDialog from './actionsDialog';
import './totalField.scss';

class TotalField extends Component {
    constructor(props){
        super(props);
        this.state = {
            showActionsDialog: false,
            avg: () => {
                this.setState({
                    showValue: this.avg(this.props.total, this.props.count),
                    showType: 'Avg'
                });
            },
            total: () => {
                this.setState({
                    showValue: this.props.count,
                    showType: 'Count'
                });
            },
            sum: () => {
                this.setState({
                    showValue: this.props.total,
                    showType: 'Sum'
                });
            },
            strLength: () => {
                this.setState({
                    showValue: this.props.total,
                    showType: 'Total length'
                });
            },
            showValue: this.props.total,
            showType: 'Count'
        };
    }
    toggle() {
        this.setState({
            showActionsDialog: !this.state.showActionsDialog
        });
    }
    avg(total, count, length) {
        length = length? length: 2;
        return (total / count).toFixed(length);
    }

    fieldIndexClass() {
        return (this.props.typeValue === 'index') ? ' index' : '';
    }

    render() {
        return (
            <div className={"table-cell " + this.fieldIndexClass()} onClick={this.toggle.bind(this)}>
                <div className={(this.state.showActionsDialog && this.props.typeValue != 'index'? 'actions-dialog': 'hidden')}>
                    <ActionsDialog 
                        typeValue={this.props.typeValue}
                        avgAction={this.state.avg}
                        totalAction={this.state.total}
                        sumAction={this.state.sum}
                        strLengthAction={this.state.strLength}
                    />
                </div>
                <span className={this.props.typeValue != 'index'? '': 'hidden'}>{this.state.showType}: </span>{this.state.showValue || 0}
            </div>
        );
    }
}

export default TotalField;