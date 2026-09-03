import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text); //? Добавляет текст в массив задач в компоненте App
    setText(''); //? Чтобы обнулить состояние компонента TodoForm
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter some todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
