import { RiResetLeftFill, RiDeleteBin2Line } from 'react-icons/ri';
import Button from '../UI/Button.js';

const TodosActions = ({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) => {
  return (
    <>
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
    </>
  );
};

export default TodosActions;
