import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

//provide a way for Matrix to keep track of the selected color (think state!)
  constructor() {
    super()
    this.state = {
      color: '#fff'
    }
  }


  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColor={this.getColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  //write a method that takes in a single argument of a hex color string (i.e. '#fff') and sets the selected color to that
  setColor = (color) => {
    this.setState({ color: color })
    // console.log(hex);
  }

  //access the currently selected color from Matrix's state without passing the value explicitly as a prop
  getColor = () => {
    // console.log(this.state.color)
    return this.state.color
  }

  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
