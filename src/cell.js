import React, {Component} from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)

    this.state = {
        color: this.props.value
    }
  }

  whenClicked = () => {
    const newColor = '#333'
    this.setState({
      color: newColor
    })
  }

  render(){
    return(
      <div className="cell" onClick={this.whenClicked} style={{backgroundColor: this.state.color}}></div>
    )
  }
}
