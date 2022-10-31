import reportWebVitals from "./reportWebVitals";
import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

import { createRoot } from "react-dom/client";

const store = createStore(rootReducer);

// Start the mocking conditionally.
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
