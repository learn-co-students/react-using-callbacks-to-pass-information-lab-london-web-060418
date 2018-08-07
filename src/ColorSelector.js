import React, { Component } from 'react';

export default class ColorSelector extends Component {

//from the parent, hence "this.props.selectColor(color)":

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((color, idx) => {
      return <div key={idx} className="color-swatch"  style={{backgroundColor: color}}
        onClick={() => this.props.selectColor(color)}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
