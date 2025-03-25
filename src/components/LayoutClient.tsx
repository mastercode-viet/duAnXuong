
import React from 'react'
import NewCollectionHero from '../pages/layoutForm/Header'
import { Outlet } from 'react-router-dom'
import Footers from '../pages/layoutForm/Footer'

const LayoutClient = () => {
    return (
        <div>
            <NewCollectionHero />
            <Outlet />
            <Footers />
        </div>
    )
}

export default LayoutClient