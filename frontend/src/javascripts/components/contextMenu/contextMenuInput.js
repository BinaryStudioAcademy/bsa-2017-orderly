import React from 'react';
import { Popup, Icon, Input } from 'semantic-ui-react';

let BaseName = (props) => {
  let input
  return (
    <div>
      <form className='base-name-form'
        onSubmit={e => {
          e.preventDefault()
          props.handleClick(input.value, 'name', props.baseId)
          input.value = ''
        }}
      >
        <input placeholder="Base Name" className='base-name-input'
          ref={node => {
            input = node
          }}
        />
      </form>
    </div>
  )
}

export default BaseName