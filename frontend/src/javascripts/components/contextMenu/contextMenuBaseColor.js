import React from 'react';
import { colors } from '../configuration/baseColors'

class BaseColor extends React.Component { 
  render() {
    return (
      <div className = 'base-color-pallete'>
        <div onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.blue} className = 'base-color-pallete-item' title="blue" style = {{backgroundColor: `${colors.blue}` }} ></div> {/*onClick = {()=>onColorClick(colors.blue)}*/}
        <div onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.cyan} className = 'base-color-pallete-item' title="cyan" style = {{backgroundColor: `${colors.cyan}` }} ></div>
        <div onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.teal} className = 'base-color-pallete-item' title="teal" style = {{backgroundColor: `${colors.teal}` }} ></div>
        <div onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.pink} className = 'base-color-pallete-item' title="pink" style = {{backgroundColor: `${colors.pink}` }} ></div>
        <div onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.red} className = 'base-color-pallete-item' title="red" style = {{backgroundColor: `${colors.red}` }} ></div>
        <div onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.orange} className = 'base-color-pallete-item' title="orange" style = {{backgroundColor: `${colors.orange}` }}> </div>
        <div onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.yellow} className = 'base-color-pallete-item' title="yellow" style = {{backgroundColor: `${colors.yellow}` }}> </div>
        <div onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.green} className = 'base-color-pallete-item' title="green" style = {{backgroundColor: `${colors.green}` }}> </div>
        <div onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.purple} className = 'base-color-pallete-item' title="purple" style = {{backgroundColor: `${colors.purple}` }}> </div>
        <div onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.gray} className = 'base-color-pallete-item' title="gray" style = {{backgroundColor: `${colors.gray}` }}> </div>
      </div>
    )
  }
}

export default BaseColor