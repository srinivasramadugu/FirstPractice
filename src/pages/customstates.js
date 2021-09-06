import React, { Component } from 'react'

export default class CustomStates extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }


    render() {
        return (
            <div>
                <p className="txt_count">{this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click to count</button>
            </div>
        )
    }
}