import { NEW_TODO } from './types'

export const newTodo = text => {
  return {
    type: NEW_TODO,
    item: { text }
  }
}
