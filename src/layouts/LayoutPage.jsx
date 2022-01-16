import React from 'react'
import PropTypes from 'prop-types'
//import '../../styles/components/Layout.scss'
import { Header, Footer } from '../components'

const LayoutPage = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      <div className='Layout__Container'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

LayoutPage.defaultProps = {
  children: null,
}

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export { LayoutPage }