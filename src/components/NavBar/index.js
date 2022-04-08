import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Icon from "../Icons";

import './NavBar.scss'

function NavBar() {
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()
    const [tabSelected, setTabSelected] = useState(0)
    const icons = ['location','layer','menu']
    const menuOptiond = ['Ver Mapa', 'Lista de Casas', 'Acerca de']


    useEffect(()=>{
        const located = location.pathname
        if(located.includes('/')) setTabSelected(0)
        if(located.includes('/houses_list')) setTabSelected(1)
        if(located.includes('/house_detail')) setTabSelected(2)

    },[location])

    const handleNavigation = (index) => {
        if (index === 2){
            alert('Por favor selecciones una casa de la lista')
            return
        }
        setTabSelected(index)
        if (index === 0) navigate('/')
        if (index === 1) navigate('/houses_list')
    }

    return (
        <nav className='nav-bar'> 
            <span className="nav-bar_logo-container">
                <img src={logo} alt='draxo-logo' className='nav-bar_logo'/>
            </span>
            <ul className='nav-bar_menu'>
                {
                    icons.map((opt, index) => (
                        <li onClick={() => handleNavigation(index)}>
                           <span
                             className={tabSelected === index ?
                                'nav-bar_items nav-bar_selected': 'nav-bar_items'} 
                                key={index} 
                            >
                                <Icon
                                    item={opt}
                                    width="20px"
                                    height="20px"
                                    className="product-card__favorite-btn__icon"
                                />
                           </span>
                           <p className={tabSelected === index ?
                                "nav-bar_options options_selected":'nav-bar_options'}
                            >
                                {menuOptiond[index]}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavBar