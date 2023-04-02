import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' to={<Home />} />
            <Route path='/shop' to={<Shop />} />
            <Route path='/cart' to={<Cart />} />
        </Routes>
    )
}

export default Routers