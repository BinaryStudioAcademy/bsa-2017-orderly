import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewActions from './viewActions';
import {Icon} from 'semantic-ui-react';
import Grid from './grid/grid';
import FormView from './form/formView';
import {viewIcons} from '../configuration/viewTypes';
import './view.scss';
import InDevelopment from '../in_developing/InDeveloping';

class View extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

    handleToggleSelector = () => {
        this.props.toggleSelector();
    };

    handleChangeView = (id) => {
        this.props.changeView(id);
        this.handleToggleSelector();
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
                showFieldMenu={this.props.showFieldMenu}
                changeFieldType={this.props.changeFieldType}
                changeFieldName={this.props.changeFieldName}
                deleteField={this.props.deleteField}
                onOpenRecordDialog={this.props.openRecordDialog}
                recordDialogIndex={this.props.recordDialogIndex}
                onKeyPressComment={this.props.keyPressCommentHandler}
                user={this.props.user}
                onChangeSearch={this.props.onChangeSearch}
                searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                searchFoundIndex={this.props.searchFoundIndex}
                onChangeSearchFoundIndex={this.props.onChangeSearchFoundIndex}
                onCloseSearch={this.props.onCloseSearch}
                onToggleSearch={this.props.onToggleSearch}
                searchBlockOpen={this.props.searchBlockOpen}
            />;
        case 'form':
            return <FormView
                currentTable={this.props.currentTable}
            />;
        default:
            return <InDevelopment/>;
        }
    }

    render() {
        let viewTypes = [];
        for (let [k, val] of Object.entries(viewIcons)){
            viewTypes.push(
                <div key={k} className="add-view__option" onClick={() => this.handleAddView()}>
                    <Icon name={val}/>
                    <span>{this.capitalize(k)}</span>
                </div>)}
        if (!this.props.currentTable) {
            return (
                <h2 className="view__no-tables">
                    No tables in this base
                </h2>
            )
        }
        return (
            <div className="view__container">
                <Icon name="caret down"
                      id="header__caret"
                      size="large"
                      onClick={this.handleToggleSelector}/>
                <div className={this.props.view.showSelector ? 'view__selector' : 'hide'}>
                    <div className="selector__options">
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
                            </div>
                        )
                    })}
                    </div>
                    <hr/>
                    <div id="modal__add-view">
                        <p className=''>Add view:</p>
                        {viewTypes}
                    </div>
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
