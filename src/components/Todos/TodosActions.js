import { RiResetLeftFill, RiDeleteBin2Line } from 'react-icons/ri';

export const TodosActions = ({ todos, setTodos }) => {
  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => todo.isCompleted !== true));
  };

  return (
    <>
    <button>Reset</button>
    <button>Delete completed todos</button>
    </>
  )
};
