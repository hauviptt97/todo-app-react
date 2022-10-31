import TodoItem from "./TodoItem";
function Todos(props) {
  const { handleChange, deleteTodo, todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
export default Todos;
