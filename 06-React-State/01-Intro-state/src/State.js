import React, { Component } from 'react'

class State extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         score: 0,
    //         gameOver: false
    //     }
    // }
    state = {
        score: 9,
        gameOver: false
    }

    render() {
        return (
            <div>
                <h1>Total score: {this.state.score}</h1>
            </div>
        )
    }
}

export default State;