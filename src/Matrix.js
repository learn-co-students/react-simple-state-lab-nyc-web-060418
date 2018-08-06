import React, { Component } from 'react';
import { pattern1 } from './data';
import Cell from './Cell'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell className="cell" value={val}></Cell>) // replace me and render a cell component instead!
  )

  genMatrix = () => {
    return (
      this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
    )
  }
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: pattern1
}
