import React, { Component } from 'react'
import loading from './MyLoading.gif'

export default class Loadingspin extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='no' />
      </div>
    )
  }
}
