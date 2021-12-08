import { NEW_TODO } from './types'

export const initialState = { todos: [] }

const reducer = (state, action) => {
  switch(action.type) {
    case NEW_TODO:
      return { ...state, todos: [...state.todos, action.item]}
    default:
      return state
  }
}

export default reducer
