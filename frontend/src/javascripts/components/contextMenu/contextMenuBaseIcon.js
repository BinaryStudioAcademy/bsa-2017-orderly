import React from 'react';
import { Icon } from 'semantic-ui-react';
import { baseIcons } from '../configuration/baseIcons'

class BaseIcon extends React.Component { 
 render(){
  return (
    <div className = 'base-icon-wrapper' value='bla' >
      <div className = 'base-icon'>
        {baseIcons.map((icon, i) => {
          return (
            <div key={i} className='myicon' > 
              <Icon inverted link name={icon} 
                className='icon' color='black' size='large'
                onClick={()=> this.props.handleClick(icon, 'icon', this.props.base._id)}
              />
            </div>
         )})
        }
      </div>
    </div>
    )
  }
 }

export default BaseIcon

