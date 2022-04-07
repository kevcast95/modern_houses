import React, { useState } from "react";
import logo from '../../assets/logo.png'
import Icon from "../Icons";

import './NavBar.scss'

function NavBar() {

    const [tabSelected, setTabSelected] = useState(0)
    const menuOptions = ['location','layer','menu']

    return (
        <nav className='nav-bar'> 
            <img src={logo} alt='draxo-logo' className='nav-bar_logo'/>
            <ul className='nav-bar_menu'>
                {
                    menuOptions.map((opt, index) => (
                        <li 
                            className={tabSelected === index ?
                                'nav-bar_items nav-bar_selected': 'nav-bar_items'} 
                            key={index} 
                            onClick={() => setTabSelected(index)}
                        >
                            <Icon
                                item={opt}
                                width="20px"
                                height="20px"
                                className="product-card__favorite-btn__icon"
                            />
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavBar