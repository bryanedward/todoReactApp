import React from 'react'
import './style.css'

export const ItemsTodo = ({id, title, description}) => {
  return (
    <div className='itemTodo'>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}
