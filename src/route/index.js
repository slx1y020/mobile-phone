import React from 'react'
import { Route ,Switch ,Redirect} from 'react-router-dom'
import Home from '../page/home'
import News from '../page/news'
import Mine from '../page/mine'
import Cart from '../page/cart'
function RouteMap() {
    return (
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/mine" component={Mine} />
            <Route exact path="/cart" component={Cart} />
            <Redirect to="/home" />
        </Switch>
    )
}
export default RouteMap