import React from 'react'

import Ingredient from './Indredient/Ingredient'
import'./Burger.css'

const Burger = props => {
    return (
        <div className="Burger">
            <Ingredient type="bread-top" />
            <Ingredient type="cheese" />
            <Ingredient type="meat" />
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default Burger
