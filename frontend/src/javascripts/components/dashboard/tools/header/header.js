import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Image, Label } from 'semantic-ui-react';
import { Link, browserHistory } from 'react-router';
import UserProfile from '../../../userProfile/userProfile';
import avatar from '../../../../../images/avatar.png';
import ContextMenuIcon from '../../../contextMenu/contextMenuIcon';
import { changeBaseParam, showContextMenu, deleteBase } from '../../../homePage/homePageActions';
import LogoShort from '../../../../../images/logo_short.png'
import './header.scss';


class Header extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        const base = props.base;
        const user = props.user;
        const handleClick = props.handleClick;
    }

    render() {

        return(
            <header className='dashboard_header' style={{backgroundColor:`${this.props.base.color}`}}>
                <Image src={LogoShort}
                      onClick={() => {
                          browserHistory.push('/')
                      }}
                      size='mini'
                      className="base-icon-logo"/>
                <div className='label-header'>
                    <div className='header-base-name'>{this.props.base.name}</div>
                    <div claccName='icon-dashbord-settings'>
                        <ContextMenuIcon
                            tables={this.props.tables}
                            base={this.props.base}
                            menu={this.props.menu}
                            handleClick={this.props.handleClick}
                        />
                    </div>
                </div>
                <div className='info'>
                    {/*<Icon link className="header-icon" name='help circle' size='large'/>*/}
                    {/*<Icon link className="header-icon" name='grid layout' size='large'/>*/}
                    {/*<Icon link className="header-icon" name='bell' size='large' />*/}
                    <UserProfile user={this.props.user} members={this.props.members}/>
                    <span className="user-profile-logout-wrapper header-icon">
                        <Link to={'/logout'} className="logout" title="Logout">
                            <Icon name="log out" size="large"/>
                        </Link>
                    </span>
                </div>
            </header>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (value, type, _id) => {
            if ( type === 'show' ) {
                dispatch(showContextMenu(value, type, _id))
            } else if ( type === 'delete') {
                dispatch(deleteBase(value, type, _id))
            } else {
                dispatch(changeBaseParam(value, type, _id))
            }
        }
    }
}

Header  = connect(null, mapDispatchToProps)(Header);

export default Header