import styles from './Todo.module.css'

const Todo = ({ todo }) => {
  return (
    <div className={styles.todo}>
      <div className={styles.todText}>{todo}</div>
    </div>
  );
};

export default Todo;
