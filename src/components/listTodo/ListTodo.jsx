import React from 'react'
import { data } from '../../data/data'
import { ItemsTodo } from './ItemsTodo'

export const ListTodo = () => {
  return (
    <div className='listTodo'>
        <h3>Lista de Tareas a realizar</h3>
        {
            data.map((item) => (
              <ItemsTodo {...item}/>
            ))
        }
    </div>
  )
}
