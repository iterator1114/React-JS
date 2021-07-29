import React, { Component } from 'react'

class Brokenclick extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { clicked: false };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick(e) {
    //     this.setState({ clicked: true });
    // }

    state = {
        clicked: false
    }

    handleClick = (e) => {
        this.setState({ clicked: true });
    }

    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'clicked!!!' : 'notClicked!'}</h1>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}



export default Brokenclick;