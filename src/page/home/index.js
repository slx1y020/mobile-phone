import React, { Component } from 'react'
import Tabbar from '../../components/tabbar'
export default class Home extends Component {
    render() {
        return (
            <div>
                Home
                <Tabbar {...this.props}/>
            </div>
        )
    }
}
