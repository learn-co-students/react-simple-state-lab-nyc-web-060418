import React, { Component } from 'react';
// import {pattern1} from './data.js';
import Cell from './Cell.js';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <div className="cell">
      <Cell value={val} />
    </div>) 
    
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

// let redArr = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']

// Matrix.defaultProps = {
//   values: [redArr, redArr, redArr, redArr, redArr, redArr, redArr, redArr, redArr, redArr]
// }

//there has to be a better way


Matrix.defaultProps = {
  values: (() => {
    const redArr = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array (10).fill(redArr))
  })()
}