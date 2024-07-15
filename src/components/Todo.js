import React from 'react';

const Todo = ({todo, index, markComplete, removeTodo}) => {
  return(
    <li>
        {todo}
        <button onClick={() => markComplete(index)}>Mark Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default Todo;
