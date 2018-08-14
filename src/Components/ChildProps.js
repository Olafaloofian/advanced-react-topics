import React, { Component } from 'react'

export default class ChldProps extends Component{
    constructor() {
        super()

        this.state = {
            counter: 0
        }

        this.timer = setInterval(this.rotateThrough, 2000) // Setting a repeating timer with 'this' so that it can be unmounted later on.
    }

    rotateThrough = () => {
        let newDisplay = this.state.counter
        newDisplay++
        if(newDisplay >= this.props.children.length) {
            newDisplay = 0
        }
        this.setState({
            counter: newDisplay
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        console.log('------------ this.props', this.props)
        return(
            <div>
                {/* Figure is html tag for wrapping images */}
                <figure>{this.props.children[this.state.counter]}</figure> 
            </div>
        )
    }
}