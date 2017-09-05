import React, {Component} from 'react';
import {Icon, Button} from 'semantic-ui-react';
import './extraMenu.scss';

export default class ExtraMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    handleClickOnMenu = () => {
        if (this.refs.extraMenu) {
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
        if (e.target.closest(".form__extra-menu") === null) {
            if (this.node) {
                if (this.node.contains(e.target)) {
                    return;
                }
            }
            this.handleClickOnMenu();
        }
    };

    render() {
        
        return (
            <Button basic ref='extraMenu' className="extra__button">
                <div ref={(node) => this.node = node }
                     onClick={(e) => this.handleClickOnMenu(e)}
                     className='button__items'>
                    <Icon name='ellipsis horizontal'/>
                </div>
                <div className={this.state.isActive ? 'form__extra-menu' : 'hide'}>
                    {this.props.viewsCount > 1 &&
                        <div className='extra-menu__item'
                             onClick={() => {
                                 this.props.deleteView();
                                 this.handleClickOnMenu();
                             }}
                        >
                            <Icon name='trash' size='large'/>
                            <span className='item__span'>Delete view</span>
                        </div>
                    }
                    {this.props.viewsCount === 1 &&
                    <div className='extra-menu__item item__disabled'>
                        <Icon name='trash' size='large'/>
                        <span className='item__span'>Delete view</span>
                        <span className='span__tooltip'>
                            Can not delete view if it's only one left in the table
                        </span>
                    </div>
                    }
                </div>
            </Button>
        );
    }
}
