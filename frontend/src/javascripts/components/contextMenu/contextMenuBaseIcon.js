import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { baseIcons } from '../configuration/baseIcons';
import { changeBaseIcon } from './contextMenuActions';

let BaseIconList = ({ contextMenu, onIconClick }) => (
    <div className = 'base-icon-wrapper'>
        <div className = 'base-icon'>
            {baseIcons.map(function(icon, i){
                return (
                    <div key={i} className='myicon' onClick = { () => onIconClick(icon) }>
                        <Icon inverted link name={icon} 
                            className='icon' color='black' size='large'
                        />
                    </div>
                );})
            }
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    contextMenu: state
});

const mapDispatchToProps = (dispatch) => ({
    onIconClick: (contextMenu) => { dispatch(changeBaseIcon(contextMenu)); }
});

const BaseIcon = connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseIconList);

export default BaseIcon;

