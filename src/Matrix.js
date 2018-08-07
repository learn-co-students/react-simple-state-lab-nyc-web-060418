import React, { Component } from 'react';
import { pattern1 } from './data';
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
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

const defValues = []
pattern1.forEach(arr => defValues.push(arr.map(e => '#F00')));

Matrix.defaultProps = {
  values: defValues
}
