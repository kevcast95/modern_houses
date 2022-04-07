import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../../components/NavBar'

import './Layout.scss'

function Layout({ children }) {
  return (
    <article className='layout'>
      <NavBar />
      <div className="layout-body">
        <div className='layout-texts'>
          <h2>Lista de Casas</h2>
          <p>Lista de casas en San Francisco</p>
        </div>
        {children}
      </div>
    </article>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
