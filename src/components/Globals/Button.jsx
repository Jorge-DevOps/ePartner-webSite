import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/sass/components/Button.sass'

const Button = ({ name, modifier, children, handle }) => {
  return (
    <button
      type='submit'
      className={`Button Button--${modifier}`}
      onClick={handle ? () => handle() : null}
    >
      {name && <span>{name}</span>}
      {children}
    </button>
  )
}

export { Button }