// Code EyesOnMe Component Here

import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    handleFocus = (e) => {
    return console.log('Good!')
    }

    handleBlur = () => {
        return console.log('Hey! Eyes on me!')
    }

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
    )
  }
}
