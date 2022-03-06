export const reducerTodo = (initialState = [], action) => {
    
    switch (action.type) {
        case 'save':
            return initialState.length === 0 ? [action.payload] : [...initialState, action.payload]
        default:
            return initialState;
    }
}