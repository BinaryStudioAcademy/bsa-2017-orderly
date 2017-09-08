import React, {Component} from 'react';
import {Icon, Button} from 'semantic-ui-react';
import {fieldIcons, fieldNames} from "../../../configuration/fieldTypes";
import './filterMenu.scss';

export default class FilterMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldId: props.currentTable.fields[0]._id,
            condition: 'contains',
            filterQuery: '',
            isActive: false,
        };
    }

    handleClickOnMenu = () => {
        if (this.refs.filterMenu) {
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
        if (e.target.closest(".filter__menu") === null) {
            if (this.node) {
                if (this.node.contains(e.target)) {
                    return;
                }
            }
            this.handleClickOnMenu();
        }
    };

    preformFilter = () => {
        this.props.filterRecords(
            this.props.currentTable._id,
            this.props.currentTable.currentView,
        );
    };

    addFilter = () => {
        this.props.addFilter(
            this.props.currentTable._id,
            this.props.currentTable.currentView,
            this.props.currentViewType,
            this.state.fieldId,
        )
    };

    updateFilter = (filterId) => {
        this.props.updateFilter(
            this.props.currentTable._id,
            this.props.currentTable.currentView,
            this.props.currentViewType,
            this.state.fieldId,
            filterId,
            this.state.condition,
            this.state.filterQuery
        )
    };

    clearFilter = (filterId) => {
        this.props.removeFilter(
            this.props.currentTable._id,
            this.props.currentTable.currentView,
            this.props.currentViewType,
            filterId);
    };

    render() {
        const DEBUG = false; //REMOVE AFTER TESTING
        const currentView = this.props.currentTable.views.find(
            (v) => v.view._id.toString() === this.props.currentTable.currentView);
        const filtersCount = currentView.view.filters.filterSet.length;
        return (
            <Button basic ref='filterMenu' className="filter__button">
                <div ref={(node) => this.node = node }
                     onClick={(e) => this.handleClickOnMenu(e)}
                     className='button__items'>
                    <Icon name='filter'/>
                    {filtersCount ?
                        <span className="menu__text">{filtersCount} Filters</span>
                        :
                        <span className="menu__text">Filter</span>
                    }
                </div>
                <div className={this.state.isActive ? "filter__menu" : "hide"}>
                    {currentView.view.filters.filterSet.map((filterItem, ind) => {
                        return (
                            <div key={filterItem._id} className='filter__item' >
                                <div className='item__filter-controls'>
                                    <Icon className="menu__item" name="x"
                                          link onClick={() => this.clearFilter(filterItem._id)}/>
                                </div>
                                    {ind === 0 ?
                                        <span className="menu__item item__where">Where</span>
                                        :
                                        <span className="menu__item item__conjunction">And</span>
                                    }
                                <select className="menu__item item__select"
                                        onChange={(e) => {
                                            this.setState({fieldId: e.target.value}, () => this.updateFilter(filterItem._id));
                                        }}>
                                    {this.props.currentTable.fields.map((field, ind) => {
                                        return (
                                            <option key={ind} value={field._id}>{field.name}</option>
                                        );
                                    })}
                                </select>
                                <select className="menu__item item__select"
                                        onChange={(e) => {
                                            this.setState({condition: e.target.value}, () => this.updateFilter(filterItem._id))
                                        }}>
                                    {filterOptions.map((opt, ind) => {
                                        return <option key={ind} value={opt.value}>{opt.label}</option>;
                                    })}
                                </select>
                                {!filterItem.condition.includes('empty') &&
                                <input className="menu__item item__input" type="text"
                                       value={filterItem.value}
                                       onChange={(e) => {
                                           this.setState({filterQuery: e.target.value}, () => this.updateFilter(filterItem._id));
                                       }}/>}
                            </div>)
                    })}
                    {DEBUG &&
                        <Icon className="menu__item" name="checkmark" link size='large'
                              onClick={() => this.preformFilter()}/>
                    }
                    {!filtersCount &&
                        <div className='menu__item item__no-filters-label'>No filters applied to this view</div>
                    }
                    <div className='menu__item item__add-filter'
                         onClick={() => {this.addFilter()}}>
                        + Add filter</div>
                </div>
            </Button>
        );
    }
}

const filterOptions = [
    {value: 'contains', label: 'contains'},
    {value: '!contains', label: 'does not contain'},
    {value: 'is', label: 'is'},
    {value: '!is', label: 'is not'},
    {value: 'empty', label: 'is empty'},
    {value: '!empty', label: 'is not empty'},
];

//<Icon name={fieldIcons[field.type]}/>