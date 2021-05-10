import React, { Component } from 'react'
import Tabbar from '../../components/tabbar'
export default class Mine extends Component {
  render() {
    return (
      <div>
        Mine
        <Tabbar {...this.props}/>
      </div>
    )
  }
}
