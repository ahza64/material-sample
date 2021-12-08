import { useState } from 'react'
import { newTodo } from '../state/actions'

import { TextField, Button } from '@mui/material';

function PublishTodo(props) {
  const { dispatch } = props
  const [text, setText] = useState('')

  const updateText = event => {
    setText(event.target.value)
  }

  const publishTodo = () => {
    dispatch(newTodo(text))
  }

  return (
    <div>
    <TextField
      label="add todo"
      value={text}
      onChange={updateText}
    />
    <Button onClick={publishTodo}>Enter todo</Button>

    </div>
  )
}

export default PublishTodo
