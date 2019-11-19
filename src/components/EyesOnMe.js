// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{
    clickFocus = ()=> console.log("Good!")
    clickBlur = ()=> console.log("Hey! Eyes on me!")

    render(){
        return(
                <button onBlur={this.clickBlur} onFocus={this.clickFocus}>
                    Eyes on me, please!
                </button>
        )
    }
}
export default EyesOnMe