import { useState } from "react";

function AddTodo(props) {
  const [state, setState] = useState({
    title: "",
  });

  const onInputChange = (e) => {
    setState({
      title: e.target.value,
    });
  };

  const addTodo = (e) => {
    e.preventDefault();
    props.addTodo(state.title);
    setState({
      title: "",
    });
  };
  return (
    <form className="form-container" onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add Todo..."
        className="input-text"
        value={state.title}
        onChange={onInputChange}
      />
      <input type="submit" value="Submit" className="input-submit" />
    </form>
  );
}

export default AddTodo;
