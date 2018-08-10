import React, { Component } from 'react';

class Cell extends Component {
    state = {
        color: this.props.value
    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.color}} onClick={this.handleClick} className="cell">
                
            </div>
        );
    }
}

export default Cell;
