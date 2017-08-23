import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewActions from './viewActions';
import {Icon} from 'semantic-ui-react';
import Grid from './grid/grid';
import {viewIcons} from '../configuration/viewTypes';
import './view.scss';

class View extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleToggleSelector = () => {
        this.props.toggleSelector();
    };

    handleChangeView = (id) => {
        this.props.changeView(id);
    };

    viewSelector(listOfViews) {
        const activeView = listOfViews.filter((v) => v.id === this.props.view.currentView).pop();
        switch (activeView.type) {
        case 'grid':
            return <Grid
                currentTable={this.props.currentTable}
                recordData={this.props.recordData}
                onAddField={this.props.addField}
                onAddRecord={this.props.addRecord}
                onOpenRecordDialog={this.props.openRecordDialog}
                recordDialogIndex={this.props.recordDialogIndex}
                onKeyPressComment={this.props.keyPressCommentHandler}
                user={this.props.user}
            />;
        default:
            return <Grid currentTable={this.props.currentTable}/>;
        }
    }

    render() {
        return (
            <div className="view__container">
                <Icon name="caret down"
                      id="header__caret"
                      size="large"
                      onClick={this.handleToggleSelector}/>
                <div className={this.props.view.showSelector ? 'view__selector' : 'hide'}>
                    {this.props.view.views.map((view, ind) => {
                        return (
                            <div key={ind}
                                 className="selector__option"
                                 onClick={() => this.handleChangeView(view.id)}>
                                <Icon
                                    name="checkmark"
                                    className={view.id === this.props.view.currentView
                                        ? '' : 'option__notActive'}/>
                                <Icon name={viewIcons[view.type]}/>
                                {view.name}
                            </div>)
                    })
                    }
                </div>
                {this.viewSelector(this.props.view.views)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        view: state.view,
        dashboard: state.dashboardReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(viewActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
