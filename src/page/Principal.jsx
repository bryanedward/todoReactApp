import React, { useReducer } from 'react'
import { Forms } from '../components/forms/Forms'
import { ListTodo } from '../components/listTodo/ListTodo'
import { reducerTodo } from '../reducerTodo'
import './style.css'

export const Principal = ()=> {

 const initialState = []

  // creacion deel usereducer para control 
  const [state, dispatch] = useReducer(reducerTodo  ,initialState);

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
