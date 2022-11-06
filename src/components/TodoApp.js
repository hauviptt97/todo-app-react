import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Header from "./layout/Header";
import Todos from "./Todos";
import { v4 as uuid } from "uuid";
import axios from "axios";
import Footer from "../store/containers/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/actions/todoAction";

function TodoApp() {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  console.log("todos: ", todos);

  const [state, setState] = useState({
    todos: [],
  });

  useEffect(() => {
    const config = {
      params: {
        _limit: 10,
      },
    };
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then((response) => setState({ todos: response.data }));
  }, []);

  const handleCheckboxChange = (id) =>
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });

  const deleteTodo = (id) => {
    setState({
      todos: [
        ...state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  const handleAddTodoClick = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    const action = addTodo(newTodo);
    dispatch(action);

    // setState({
    //   todos: [...state.todos, newTodo],
    // });
  };

  return (
    <div className="container">
      <Header />
      <AddTodo handleAddTodoClick={handleAddTodoClick} />
      <Todos
        todos={todos}
        handleChange={handleCheckboxChange}
        deleteTodo={deleteTodo}
      />
      <Footer />
    </div>
  );
}

export default TodoApp;
