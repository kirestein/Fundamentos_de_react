import React, { Component } from 'react'
import { ButtonDec, ButtonInc } from './Buttons'
import './Contador.css'
import { Display } from './Display'
import { PassoForm } from './PassoForm'

export default class Contador extends Component {

  state = {
    num: this.props.startNum,
    passo: this.props.passoInicial || 1,
  }

  handleChange = (e) => {
    this.setState({
      passo: +e.target.value
    })
  }

  inc = _ => {
    this.setState({
      num: this.state.num + this.state.passo
      
    })
  }

  dec = _ => {
    this.setState({
      num: this.state.num - this.state.passo
    })
  }

  render() {
    return (
      <div className='Contador'>
        <Display num={this.state.num} />
        <PassoForm passada={this.state.passo} onchange={this.handleChange}/>
        <div>
          <ButtonInc inc={this.inc} />
          <ButtonDec dec={this.dec} />
        </div>
      </div>
    )
  }
}
