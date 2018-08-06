import React, { Component } from 'react';
import Cell from './cell.js'

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

function defaultArrays (){
  const array = []
  for(var i = 0; i < 10; i++) {
    array.push([])
    for (var j = 0; j < 10; j++) {
      array[i].push("#F00")
    }
  }
  return array
}

Matrix.defaultProps = {
  values: defaultArrays()

}
