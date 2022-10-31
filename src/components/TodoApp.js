import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Header from "./layout/Header";
import Todos from "./Todos";
import { v4 as uuid } from "uuid";
import axios from "axios";
import Footer from "../store/containers/Footer";

function TodoApp() {
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

  const addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    setState({
      todos: [...state.todos, newTodo],
    });
  };

  return (
    <div className="container">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={state.todos}
        handleChange={handleCheckboxChange}
        deleteTodo={deleteTodo}
      />
      <Footer />
    </div>
  );
}

export default TodoApp;
