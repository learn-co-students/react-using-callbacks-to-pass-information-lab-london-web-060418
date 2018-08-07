import React, { Component } from 'react';


export default class ColorSelector extends Component {

  makeColorSwatches = (props) => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      // console.log(str);
      // console.log(idx);
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={() => {this.props.setColor(str)}}/>
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
