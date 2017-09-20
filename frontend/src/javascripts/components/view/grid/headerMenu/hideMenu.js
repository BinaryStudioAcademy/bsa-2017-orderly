import React, {Component} from 'react';
import {Icon, Button, Popup, Header, List } from 'semantic-ui-react';
import Select from 'react-select';

export default class PopupHideColumn extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            value:'',
            label:''
        }
    }
    
    handleHide = (event) => {
        this.setState({value: event.value, label: event.label})
        this.props.updateViewHideField(this.props.currentTable._id, this.props.currentViewId, 'grid', event.value, 'true')
    }
    handleUnhide = (event, id) => {
        this.props.updateViewHideField(this.props.currentTable._id, this.props.currentViewId, 'grid', id, 'false')
    }

    render() {
        const currentView = this.props.currentTable.views.find(
            (v) => v.view._id.toString() === this.props.currentTable.currentView);
        let fieldsIdShow = [], j = 0
        for (let field in currentView.view.fields_config) {
            if (currentView.view.fields_config[field].hidden === false) {
                fieldsIdShow[j] = currentView.view.fields_config[field].field
                j += 1;
            }
        }
        console.log(fieldsIdShow)
        
        let fields = this.props.currentTable.fields   
        let hideFields = [];
        for (let field in fields) {
            if (!fieldsIdShow.includes(fields[field]._id)) {   
                hideFields.push({
                    id: fields[field]._id,
                    name: fields[field].name,
                })
            }
        }

        let propsOptions=[];
        let propsIds=[];
        let i = 0
        for (let item in fields) {
            if (fieldsIdShow.includes(fields[item]._id)) { 
                propsOptions[i] = fields[item].name
                propsIds[i] = fields[item]._id
                i += 1;
            }
        }

        let options = [];
        for (let option in propsOptions) {
        options.push({
                value: propsIds[option],
                label: propsOptions[option],
            })
        }

        let hideText = hideFields.length != 0? `${hideFields.length} Hide fields:`:'Hide fields'
        return (
          <Popup wide
            trigger={<Button disabled={this.props.isReadOnly} basic className='media'>
                        <Icon name='hide'/>
                        <span className="menu__text">{hideText}</span>
                    </Button>}
            content={
                <div className='form-share-popup-wrapper'> 
                    <div className='form-share-header'>
                        <Header as='h5'>Select a field to hide: </Header>
                    </div>
                    <Select options={options}
                        value={this.state.value}
                        onChange = {(event) => {this.handleHide(event)}}
                    />
                    <div>
                        <div className='hide-header'><Header as='h5'>Hidden fields</Header></div>
                        <List>
                        { 
                            hideFields.map((field, current) => {
                            return (
                              <List.Item className='option-list-item' key={current}>
                                <List.Content floated='left'>{field.name}</List.Content>
                                <List.Content floated='right'>
                                    <Icon name='unhide' link color='grey' onClick={(event) =>this.handleUnhide(event, field.id)}/> 
                                </List.Content>
                              </List.Item>
                            )})
                        }
                    </List>
                    </div>
                </div>
            }
            on='click'
            position='bottom left'
          />
        )
    }
}