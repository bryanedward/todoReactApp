import React from 'react'
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
      description: description
    })
    resetInput()
  }

  return (
    <div>
      <form action="" onSubmit={addTodo}>
        <div className='containerInput'>
          <label htmlFor="">Titulo</label>
          <input type="text"
            name='title'
            title='titulo de la tarea'
            autoComplete='off'
            value={title}
            onChange={changeInput} />
        </div>
        <div className='containerInput'>
          <label htmlFor="">Descripcion</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={changeInput} />
        </div>
        <button>Guardar tarea</button>
      </form>
    </div>
  )
}
