import React from 'react'
import './style.css'

export const ItemsTodo = ({id, title, description}) => {
  return (
    <div className='itemTodo'>
        <h3 className='itemTodo__title'>{title}</h3>
        <p>{description}</p>
    </div>
  )
}
