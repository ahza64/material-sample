import { useState, useReducer } from 'react'
import reducer, { initialState } from '../state/reducer'

import PublishTodo from './PublishTodo'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      <PublishTodo dispatch={dispatch} />
    </div>
  );
}

export default App;
