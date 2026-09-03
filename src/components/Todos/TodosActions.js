import { RiResetLeftFill, RiDeleteBin2Line } from 'react-icons/ri';
import Button from '../UI/Button.js';

const TodosActions = ({ todos, setTodos }) => {
  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => todo.isCompleted !== true));
  };

  return (
    <>
      <Button title={'Reset todos'}>
        <RiResetLeftFill />
      </Button>
      <Button title={'Delete completed todos'}>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
};

export default TodosActions;
