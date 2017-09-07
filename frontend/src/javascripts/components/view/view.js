import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import Grid from './grid/grid';
import FormView from './form/formView';
import KanbanView from './kanban/kanbanView';
import {viewIcons} from '../configuration/viewTypes';
import InDeveloping from '../in_developing/InDeveloping';
import './view.scss';

export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }
    }

    handleClickOnMenu = () => {
        if (this.refs.viewCaret) {
            if (!this.state.isActive) {
                document.addEventListener('click', this.handleOutsideClick, false);
            } else {
                document.removeEventListener('click', this.handleOutsideClick, false);
            }

            this.setState((menuState) => ({
                isActive: !menuState.isActive,
            }));
        }
    };

    handleOutsideClick = (e) => {
        if (e.target.closest(".view__caret") === null) {
            if (this.node) {
                if (this.node.contains(e.target)) {
                    return;
                }
            }
            this.handleClickOnMenu();
        }
    };

    handleChangeView = (viewId) => {
        this.props.changeView(this.props.currentTable._id, viewId);
        this.handleClickOnMenu();
    };

    handleAddView = (viewType) => {
        this.props.addView(this.props.currentTable._id, viewType);
        this.handleClickOnMenu();
    };

    handleDeleteView = () => {
        const view = this.props.currentTable.views.find((v) => v.view._id === this.props.currentView);
        this.props.deleteView(this.props.currentTable._id, this.props.currentView, view.type);
    };

    viewSelector(listOfViews) {
        const viewsCount = listOfViews.length;
        const activeView = listOfViews.find((v) => v.view._id === this.props.currentView);
        switch (activeView.type) {
        case 'grid':
            return <Grid
                currentTable={this.props.currentTable}
                currentViewType={activeView.type}
                tables={this.props.tables}
                recordData={this.props.recordData}
                addRecord={this.props.addRecord}
                addField={this.props.addField}
                deleteField={this.props.deleteField}
                deleteRecord={this.props.deleteRecord}
                sortRecords={this.props.sortRecords}
                filterRecords={this.props.filterRecords}
                filteredRecords={this.props.filteredRecords}
                removeFilter={this.props.removeFilter}
                changeFieldType={this.props.changeFieldType}
                changeFieldName={this.props.changeFieldName}
                changeFieldOptions={this.props.changeFieldOptions}
                onOpenRecordDialog={this.props.openRecordDialog}
                recordDialogIndex={this.props.recordDialogIndex}
                onKeyPressComment={this.props.keyPressCommentHandler}
                deleteFile={this.props.deleteFile}
                uploadAttachment={this.props.uploadAttachment}
                user={this.props.user}
                onChangeSearch={this.props.onChangeSearch}
                searchMatchedRecordItemIdList={this.props.searchMatchedRecordItemIdList}
                searchFoundIndex={this.props.searchFoundIndex}
                onChangeSearchFoundIndex={this.props.onChangeSearchFoundIndex}
                onToggleSearch={this.props.onToggleSearch}
                searchBlockOpen={this.props.searchBlockOpen}
                deleteView={() => this.handleDeleteView()}
                viewsCount={viewsCount}
                addFilter={this.props.addFilter}
                updateFilter={this.props.updateFilter}
            />;
        case 'form':
            return <FormView
                currentTable={this.props.currentTable}
                deleteView={() => this.handleDeleteView()}
                viewsCount={viewsCount}
            />;
        case 'kanban':
            return <KanbanView viewsCount={viewsCount}
                               currentViewId={this.props.currentView}
                               currentTable={this.props.currentTable}
                               deleteView={() => this.handleDeleteView()}/>
        default:
            return <InDeveloping/>;
        }
    }

    capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

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
                <div ref='viewCaret' className="view__caret">
                    <div ref={(node) => this.node = node }
                         onClick={(e) => this.handleClickOnMenu(e)}>
                        <Icon name="caret down"
                              id="header__caret"
                              size="large"/>
                    </div>
                    <div className={this.state.isActive ? 'view__selector' : 'hide'}>
                        <div className="selector__options">
                            {this.props.currentTable.views.map((view, ind) => {
                                return (
                                    <div key={ind}
                                         className="selector__option"
                                         onClick={() => this.handleChangeView(view.view._id)}>
                                        <Icon
                                            name="checkmark"
                                            className={view.view._id === this.props.currentView
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
                </div>
                {this.viewSelector(this.props.currentTable.views)}
            </div>
        );
    }
}
