export const reducerTodo = (initialState, action) => {
    switch (action.type) {
        case 'save':
            return [...initialState , action.payload]
        default:
            return initialState;
    }
}