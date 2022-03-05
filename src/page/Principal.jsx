import React from 'react'
import { Forms } from '../components/forms/Forms'
import { ListTodo } from '../components/listTodo/ListTodo'
import './style.css'

export const Principal = () => {
  return (
    <div className='containerPrincipal'>
        <Forms/>
        <ListTodo/>
    </div>
  )
}
