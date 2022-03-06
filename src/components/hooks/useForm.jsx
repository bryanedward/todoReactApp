import { useState } from "react"

export const useForm = (initialState) => {
    const [value, setValue] = useState(initialState)

    const changeInput = ({ target }) => {
        //guardar los valores en el state
        setValue({
            ...value,
            [target.name]: target.value
        })
    }

    const resetInput = () => {
        // resetear los input
        setValue({
            title: '',
            description: ''
        })
    }

    return [changeInput, value, resetInput]
}
