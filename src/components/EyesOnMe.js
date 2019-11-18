import React, { Component } from 'react';


export default class EyesOnMe extends Component {

    focus = () => {
        console.log('Good!')
    }

    blur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
          <h1>
          <button
            onFocus={this.focus}
            onBlur={this.blur}>
          </button>
          </h1>
        )
      }
 }
