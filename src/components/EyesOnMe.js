// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    focusing = () => {
        console.log('Good!')
    }

    blurry = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return <button onFocus={this.focusing} onBlur={this.blurry}>Click me</button>
    }
}