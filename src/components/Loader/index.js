import React from "react";

import loader from '../../assets/spinner.gif'
import './Loader.scss'
function Loader() {
    return (
        <div className='loader'>
            <img src={loader} alt='loader-icon' />
            <p>Cargando, por favor espere...</p>
        </div>
    )
}

export default Loader