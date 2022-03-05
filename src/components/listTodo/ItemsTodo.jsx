import React from 'react'
import './style.css'

export const ItemsTodo = ({id, nameTodo, description}) => {
  return (
    <div className='itemTodo'>
        <p>{nameTodo}</p>
    </div>
  )
}
