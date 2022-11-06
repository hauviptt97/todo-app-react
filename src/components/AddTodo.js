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

  const handleAddTodoClick = (e) => {
    e.preventDefault();
    props.handleAddTodoClick(state.title);
    setState({
      title: "",
    });
  };
  return (
    <form className="form-container" onSubmit={handleAddTodoClick}>
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
