import React from 'react';
// import uniqid from 'uniqid';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { changeBaseIcon } from './contextMenuActions';

let icons = ['student', 'setting', 'trophy', 'privacy', 'alarm outline', 'lab', 'bug', 'code', 'sitemap', 'protect', 'unhide', 'random', 'retweet', 'sign language', 'bomb', 'sun', 'law', 'life ring', 'anchor', 'hand scissors', 'snowflake outline', 'thermometer empty', 'tv', 'cube', 'asterisk', 'database', 'plane', 'shipping', 'umbrella', 'fire', 'cocktail', 'book', 'gift', 'road', 'rocket', 'bar', 'legal', 'area chart', 'line chart', 'camera retro', 'bath', 'hourglass empty', 'find', 'options', 'ticket', 'copyright', 'heartbeat', 'at', 'eyedropper', 'trademark', 'hourglass half', 'alarm mute', 'history', 'percent', 'hashtag', 'shopping basket', 'shopping bag', 'file excel outline', 'barcode', 'html5', 'fork', 'empty star', 'heart', 'smile', 'frown', 'star half empty']

let BaseIconList = ({ contextMenu, onIconClick }) => {
  return (
    <div className = 'base-icon-wrapper'>
      <div className = 'base-icon'>
        {icons.map(function(icon, i){
          return (
            <div className='myicon' onClick = { () => onIconClick(icon) }>
              <Icon inverted link name={icon} 
                key={i} className='icon' color='black' size='large'
              />
            </div>
         )})
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  contextMenu: state
});

const mapDispatchToProps = dispatch => {
  return {
    onIconClick: (contextMenu) => { dispatch(changeBaseIcon(contextMenu)) }
  };
}

const BaseIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseIconList)

export default BaseIcon

