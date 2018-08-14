import React, { Component } from 'react'

export default (ComponentToRender) =>
    class extends Component {
        render() {
            const { loadingImage, ...props } = this.props // Becuase loadingImage is before the spread operator, it is not included in the props variable. 'props' will be name and data
            console.log('------------ props', props)
            return(
                <div>
                    {this.props.data.length ? 
                    <ComponentToRender {...props} /> // ...props is equal to {name: this.props.name, data: this.props.data}
                    : 
                    <img src={this.props.loadingImage} alt='Loading...'/>
                    }
                </div>
            )
        }
    }