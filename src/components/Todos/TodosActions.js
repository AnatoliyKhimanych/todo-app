import { RiResetLeftFill, RiDeleteBin2Line } from 'react-icons/ri';
import Button from '../UI/Button.js';
import styles from './TodosActions.module.css';

const TodosActions = ({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title={'Reset todos'} onClick={resetTodos}>
        <RiResetLeftFill />
      </Button>
      <Button
        title={'Delete completed todos'}
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodosActions;
