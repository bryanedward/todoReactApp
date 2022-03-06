import React from 'react'
import { data } from '../../data/data'
import { ItemsTodo } from './ItemsTodo'

export const ListTodo = ({state}) => {
  return (
    <div className='listTodo'>
        <h3>Lista de Tareas a realizar</h3>
        {
            state.map((item, index) => (
              <ItemsTodo 
              key={index}
              {...item}/>
            ))
        }
    </div>
  )
}
