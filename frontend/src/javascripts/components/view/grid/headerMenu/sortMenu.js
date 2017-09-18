import React, {Component} from 'react';
import {Icon, Button} from 'semantic-ui-react';
import {fieldIcons, fieldNames} from "../../../configuration/fieldTypes";
import './sortMenu.scss';

export default class SortMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldId: this.props.currentTable.fields[0]._id,
            fieldType: this.props.currentTable.fields[0].type,
            sortOption: 'text-asc',
            isActive: false,
        };
    }

    handleClickOnMenu = () => {
        if (this.refs.sortMenu) {
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
        if (e.target.closest(".sort__menu") === null) {
            if (this.node) {
                if (this.node.contains(e.target)) {
                    return;
                }
            }
            this.handleClickOnMenu();
        }
    };

    addSort = () => {
        const {fieldId, fieldType, sortOption} = R.dissoc('isActive', this.state);
        this.props.addSort(
            this.props.currentTable._id,
            this.props.currentTable.currentView,
            this.props.currentViewType,
            fieldId,
            fieldType,
            sortOption);
    };

    updateSort = (sortId) => {
        this.props.updateSort(
            this.props.currentTable._id,
            this.props.currentTable.currentView,
            this.props.currentViewType,
            this.state.fieldId,
            sortId,
            this.state.sortOption,
        )
    };

    clearSort = (sortId) => {
        this.props.removeSort(
            this.props.currentTable._id,
            this.props.currentTable.currentView,
            this.props.currentViewType,
            sortId);
    };

    clearAllSorts = () => {
        this.props.removeAllSorts(
            this.props.currentTable._id,
            this.props.currentTable.currentView,
            this.props.currentViewType);
    };

    render() {
        const currentView = this.props.currentTable.views.find(
            (v) => v.view._id.toString() === this.props.currentTable.currentView);
        const sortsCount = currentView.view.sorts.length;
        return (
            <Button basic ref='sortMenu' disabled={this.props.isReadOnly}
                    className="sort__button">
                <div ref={(node) => this.node = node }
                     onClick={(e) => this.handleClickOnMenu(e)}
                     className='button__items'>
                    <Icon name='sort content ascending'/>
                    {sortsCount ?
                        <span className="menu__text">{sortsCount} Sort</span>
                        :
                        <span className="menu__text">Sort</span>
                    }
                </div>
                <div className={this.state.isActive ? "sort__menu" : "hide"}>
                    {currentView.view.sorts.map((sortItem, ind) => {
                        const [fieldType, sortOrder] = sortItem.sortOption.split('-');
                        return (
                            <div key={sortItem._id} className='sort__item' >
                                <div className='item__sort-controls'>
                                    <Icon className="menu__item" name="x"
                                          link onClick={() => this.clearSort(sortItem._id)}/>
                                </div>
                                {ind === 0 ?
                                    <span className="menu__item item__sort-by">Sort by</span>
                                    :
                                    <span className="menu__item item__then-by">Then</span>
                                }

                                <select className="menu__item item__select" onChange={(e) => {
                                    let [fieldId, fieldType] = e.target.value.split(',');
                                    let setType = 'number';
                                    if (textTypes.includes(fieldType)){
                                        setType = 'text';
                                    }
                                    this.setState({
                                        fieldId: fieldId,
                                        fieldType: setType,
                                        sortOption: sortItem.sortOption,
                                    }, () => {this.updateSort(sortItem._id)});
                                }}>
                                    {this.props.currentTable.fields.map((field, ind) => {
                                        return (
                                            <option key={ind} value={[field._id, field.type]}>{field.name}</option>
                                        );
                                    })}
                                </select>
                                <div className="menu__item option__choices">
                                    {sortOptions[fieldType].map((opt, ind) => {
                                        return <div key={ind}
                                                    className={sortItem.sortOption === opt.value ? 'sort__option option__checked' : 'sort__option'}
                                                    value={opt.value}
                                                    onClick={() => this.setState({
                                                        sortOption: opt.value
                                                    }, () => {this.updateSort(sortItem._id)})}>
                                            <span>{opt.label}</span>
                                        </div>;
                                    })}
                                </div>
                            </div>)
                    })}
                    {!sortsCount &&
                        <div className='menu__item item__no-sorts-label'>No sorts applied to this view</div>
                    }
                    <div className='menu__item item__menu-controls'>
                        <div className='menu__item item__add-sort'
                             onClick={() => {
                                 this.setState({
                                     fieldId: this.props.currentTable.fields[0]._id,
                                     sortOption: 'text-asc',
                                 }, () => this.addSort())
                             }}>
                            + Add sort</div>
                        {!!sortsCount &&
                        <div className='menu__item item__clear-sorts'
                             onClick={() => {
                                 this.setState({
                                     fieldId: this.props.currentTable.fields[0]._id,
                                     sortOption: 'text-asc',
                                 }, () => this.clearAllSorts())
                             }}>
                            Clear all</div>
                        }
                    </div>

                    {/* ORIGINAL SORT MENU
                    <Icon className="menu__item" name="x" link/>
                    <Icon className="menu__item" name="checkmark" link onClick={() => this.addSort()}/>
                    <span className="menu__item item__label-sort-by">Sort by</span>
                    <select className="menu__item item__select" onChange={(e) => {
                        let [fieldId, fieldType] = e.target.value.split(',');
                        let setType = 'number';
                        if (textTypes.includes(fieldType)){
                            setType = 'text';
                        }
                        this.setState({
                            fieldId: fieldId,
                            fieldType: setType
                        });
                    }}>
                        {this.props.currentTable.fields.map((field, ind) => {
                            return (
                                <option key={ind} value={[field._id, field.type]}>{field.name}</option>
                            );
                        })}
                    </select>
                    <span className="menu__item">from</span>
                    <div className="menu__item option__choices">
                        {sortOptions[this.state.fieldType].map((opt, ind) => {
                            return <div key={ind}
                                        className={this.state.sortOption === opt.value ? 'sort__option option__checked' : 'sort__option'}
                                        value={opt.value}
                                        onClick={() => this.setState({sortOption: opt.value})}>
                                <span>{opt.label}</span>
                            </div>;
                        })}
                    </div>
                    */}
                </div>
            </Button>
        );
    }
}

const textTypes = ['text', 'longtext', 'url', 'email'];

const sortOptions = {
    text: [
        {value: 'text-asc', label: 'A -> Z'},
        {value: 'text-desc', label: 'Z -> A'}
    ],
    number: [
        {value: 'num-asc', label: '1 -> 9'},
        {value: 'num-desc', label: '9 -> 1'}
    ],
};

//<Icon name={fieldIcons[field.type]}/>