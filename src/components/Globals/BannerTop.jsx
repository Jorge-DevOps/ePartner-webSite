import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/sass/components/Button.sass'

const BannerTop = ({ name, modifier, image, handle }) => {
  return (
    <img className={`bannertop banner-top--${modifier}`} src={image} alt="" />
    )
}

export { BannerTop }