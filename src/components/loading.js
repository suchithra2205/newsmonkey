import React, { Component } from 'react'
import Loading from './Ajax-loader.gif'
export default class loading extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={Loading} alt='loading...'/>
      </div>
    )
  }
}
