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
    }

    capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

    handleToggleSelector = () => {
        this.props.toggleSelector();
    };

    handleChangeView = (id) => {
        this.props.changeView(id);
        this.handleToggleSelector();
    };

    handleAddView = (viewType) => {
        console.log(this.props.currentTable);
        console.log(viewType);
    };

    viewSelector(listOfViews) {
        const activeView = listOfViews.find((v) => v.view._id === this.props.currentView);
        switch (activeView.type) {
        case 'grid':
            return <Grid
                currentTable={this.props.currentTable}
                tables={this.props.tables}
                recordData={this.props.recordData}
                addRecord={this.props.addRecord}
                addField={this.props.addField}
                deleteRecord={this.props.deleteRecord}
                sortRecords={this.props.sortRecords}
                filterRecords={this.props.filterRecords}
                filteredRecords={this.props.filteredRecords}
                removeFilter={this.props.removeFilter}
                showFieldMenu={this.props.showFieldMenu}
                changeFieldType={this.props.changeFieldType}
                changeFieldName={this.props.changeFieldName}
                changeFieldOptions={this.props.changeFieldOptions}
                deleteField={this.props.deleteField}
                onOpenRecordDialog={this.props.openRecordDialog}
                recordDialogIndex={this.props.recordDialogIndex}
                onKeyPressComment={this.props.keyPressCommentHandler}
                user={this.props.user}
                onChangeSearch={this.props.onChangeSearch}
                searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                searchFoundIndex={this.props.searchFoundIndex}
                onChangeSearchFoundIndex={this.props.onChangeSearchFoundIndex}
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
        for (let [viewName, viewIcon] of Object.entries(viewIcons)) {
            viewTypes.push(
                <div key={viewName} className="add-view__option" onClick={() => this.handleAddView(viewName)}>
                    <Icon name={viewIcon}/>
                    <span>{this.capitalize(viewName)}</span>
                </div>)
        }
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
                <div className={this.props.showSelector ? 'view__selector' : 'hide'}>
                    <div className="selector__options">
                        {this.props.currentTable.views.map((view, ind) => {
                            return (
                                <div key={ind}
                                     className="selector__option"
                                     onClick={() => this.handleChangeView(view.view._id)}>
                                    <Icon
                                        name="checkmark"
                                        className={view._id === this.props.currentView
                                            ? '' : 'option__notActive'}/>
                                    <Icon name={viewIcons[view.type]}/>
                                    {view.view.name}
                                </div>
                            )
                        })}
                    </div>
                    <hr/>
                    <div className="add-view__menu">
                        <p className=''>Add view:</p>
                        {viewTypes}
                    </div>
                </div>
                {this.viewSelector(this.props.currentTable.views)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showSelector: state.view.showSelector,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(viewActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
