import React, { Component } from 'react'
import Tabbar from '../../components/tabbar'
export default class News extends Component {
  render() {
    return (
      <div>
        News
        <Tabbar {...this.props}/>
      </div>
    )
  }
}
