import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text); //? Добавляет текст в массив задач в компоненте App
    setText(''); //? Чтобы обнулить состояние компонента TodoForm
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter some todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
