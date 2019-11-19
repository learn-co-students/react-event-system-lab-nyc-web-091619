// Code Keypad Component Here
import React from 'react'
class Keypad extends React.Component{
    click = ()=> console.log("Entering password...")
    render(){
        return (
        <div>
        <input type = 'password' onKeyUp={this.click} />
        </div>)
    }
}

export default Keypad