import React from 'react'
import { data } from '../../data/data'
import { ItemsTodo } from './ItemsTodo'

export const ListTodo = ({state}) => {
  console.log(state);
  return (
    <div className='listTodo'>
        <h3 className='listTodo__title'>Lista de Tareas a realizar</h3>
        {
          (state.length === 0 ? <h4>no hay datos guardados ....</h4> : <div>
             {state.map((item, index) => (
              <ItemsTodo 
              key={index}
              {...item}/>
            ))}
          </div>)
        }
        {/* {
           
        } */}
    </div>
  )
}
