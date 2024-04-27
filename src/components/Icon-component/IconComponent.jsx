import React from 'react'
import './iconComponent.css'

function IconComponent(props) {
    const {icon, text} = props
  return (
    <div className='icon-container'>
      {icon}
      <span>{text}</span>
    </div>
  )
}

export default IconComponent
