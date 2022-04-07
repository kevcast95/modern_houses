import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../../components/NavBar'

import './Layout.scss'

function Layout({ children }) {
  return (
    <article className='layout'>
      <NavBar />
      <div className="layout-body">{children}</div>
    </article>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
