import React, {Component} from 'react';
import { Button, Popup, Icon, Input, Header } from 'semantic-ui-react'
import CopyToClipboard from 'react-copy-to-clipboard';

export default class PopupShareForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            value:`${window.location.hostname}:${window.location.port}/${this.props.tableId}/${this.props.viewId}`,
            copied: false
        }
    }

    render() {
      console.log()
        return (
          <Popup size ="small" wide
            trigger={<div className='btn-form-menu'>
                        <Icon name='external'/>
                            <span className="menu__text">Share form</span>
                    </div>}
            content={
                <div className='form-share-popup-wrapper'> 
                    <div className='form-share-header'>
                        <Header as='h3'>This form is shared via a private link </Header>
                    </div>
                    <div className='form-share-text'>People with the private link can to fill out the form and then submit. You can see and manage responses to your form in a grid view.</div>
                    <div>
                        <Input value={this.state.value} fluid/>
                    </div>
                    <div className='form-share-btn'>
                    <CopyToClipboard text={this.state.value} onCopy={() => this.setState({copied: true})}>
                        <div>
                            <Popup
                              trigger={<Button color='blue'>Copy link</Button>}
                              content='Link has been copied!'
                              size='tiny'
                              inverted
                              on='click'
                              position='top center'
                              />
                        </div>
                     </CopyToClipboard>
                    </div>
                </div>
            }
            on='click'
          />
        )
    }
}
