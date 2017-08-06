import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const InDeveloping = () => (
  <Header as='h2'
          style={{ marginTop: '50px' }}
          icon
          textAlign='center'>
    <Icon name='settings' />
    In developing...
  </Header>
)

export default InDeveloping