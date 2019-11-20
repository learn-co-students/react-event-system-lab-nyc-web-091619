// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
    
    state = {

    }

    focusHandler = () => (
        console.log('Good!')
    )

    blurHandler = () => (
        console.log('Hey! Eyes on me!')
    )

    render() { 
        return (  
            <button onBlur={this.blurHandler} onFocus={this.focusHandler}> </button>
        );
    }
}
 
export default EyesOnMe;