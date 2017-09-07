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
        if (this.state.condition.includes('empty')) {
            this.setState({filterQuery: ''})
        }
        this.props.filterRecords(
            this.props.currentTable._id,
            this.props.currentTable.currentView,
            this.props.currentViewType,
            this.state.fieldId,
            this.state.condition,
            this.state.filterQuery,
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

    clearFilter = (filterId) => {
        this.props.removeFilter(
            this.props.currentTable._id,
            this.props.currentTable.currentView,
            this.props.currentViewType,
            filterId);
    };

    render() {
        const currentView = this.props.currentTable.views.find(
            (v) => v.view._id.toString() === this.props.currentTable.currentView);
        return (
            <Button basic ref='filterMenu' className="filter__button">
                <div ref={(node) => this.node = node }
                     onClick={(e) => this.handleClickOnMenu(e)}
                     className='button__items'>
                    <Icon name='filter'/>
                    <span className="menu__text">Filter</span>
                </div>
                <div className={this.state.isActive ? "filter__menu" : "hide"}>
                    {currentView.view.filters.filterSet.map((filterItem, ind) => {
                        return (
                            <div key={filterItem._id} className='filter__item'>
                                <div className='item__filter-controls'>
                                    <Icon className="menu__item" name="x"
                                          link onClick={() => this.clearFilter(filterItem._id)}/>
                                    <Icon className="menu__item" name="checkmark" link
                                          onClick={() => this.preformFilter()}/>
                                </div>
                                    {ind === 0 ?
                                        <span className="menu__item item__where">Where</span>
                                        :
                                        <span className="menu__item item__conjunction">And</span>
                                    }
                                <select className="menu__item item__select"
                                        onChange={(e) => this.setState({fieldId: e.target.value})}>
                                    {this.props.currentTable.fields.map((field, ind) => {
                                        return (
                                            <option key={ind} value={field._id}>{field.name}</option>
                                        );
                                    })}
                                </select>
                                <select className="menu__item item__select"
                                        onChange={(e) => this.setState({condition: e.target.value})}>
                                    {filterOptions.map((opt, ind) => {
                                        return <option key={ind} value={opt.value}>{opt.label}</option>;
                                    })}
                                </select>
                                {!this.state.condition.includes('empty') &&
                                <input className="menu__item item__input" type="text"
                                       onChange={(e) => this.setState({filterQuery: e.target.value})}/>}
                            </div>)
                    })}
                    {!currentView.view.filters.filterSet.length &&
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