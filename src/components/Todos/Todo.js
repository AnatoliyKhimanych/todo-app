import styles from './Todo.module.css';
import { FaCheck } from 'react-icons/fa6';
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';


const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
      <FaCheck className={styles.checkIcon} />
    </div>
  );
};

export default Todo;
