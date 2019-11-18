// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    
    focusHandler = () => {
        console.log("Good!")
    }

    blurHandler = () => {
        console.log("Hey! Eyes on me!")
    }
    
    render(){
        return (
            <button onBlur={this.blurHandler} onFocus={this.focusHandler}></button>
        )
    }

}