import React from 'react'
import './style.css'
import { useForm } from '../hooks/useForm'

export const Forms = ({ saveTodo }) => {

  const [changeInput, { title, description }, resetInput] = useForm({
    title: '',
    description: ''
  })

  const addTodo = (e) => {
    e.preventDefault()
    saveTodo({
      id: new Date().getMilliseconds(),
      title: title,
      description: description,
    })
    resetInput()
  }

  return (
    <div className='container__form'>
      <form action="" onSubmit={addTodo}>
        <div className='containerInput'>
          <label htmlFor="">Titulo de la tarea</label>
          <input type="text"
            name='title'
            title='titulo de la tarea'
            autoComplete='off'
            value={title}
            required="required"
            onChange={changeInput} />
        </div>
        <div className='containerTextArea'>
          <label htmlFor="">Descripcion de la tarea</label>
          <textarea name="description" id=""
            cols="30"
            autoComplete='off'
            required="required"
            value={description}
            onChange={changeInput}
            rows="10">
          </textarea>
        </div>
        <button className='btnSaveTodo'>Guardar tarea</button>
      </form>
    </div>
  )
}
