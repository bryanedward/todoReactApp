import React, { useEffect, useReducer } from 'react'
import { Forms } from '../components/forms/Forms'
import { ListTodo } from '../components/listTodo/ListTodo'
import { reducerTodo } from '../reducerTodo'
import './style.css'

export const Principal = ()=> {

 const init = () => {
    return JSON.parse(localStorage.getItem('data') || [])
 }
  // creacion deel usereducer para control 
  const [state, dispatch] = useReducer(reducerTodo , init);

  useEffect(() => {
    localStorage.setItem('data',JSON.stringify(state))
  }, [state])
  

  const saveTodo = (newTodo) => {
    dispatch({
      type:'save',
      payload: newTodo
    })
  }

  return (
    <div className='containerPrincipal'>
        <Forms saveTodo={saveTodo}/>
        <ListTodo state={state}/>
    </div>
  )
}
