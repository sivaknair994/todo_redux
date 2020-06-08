import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => (
  <div className="container">
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      <div className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}>
          <div className="card">
              <div className="card-header">
                {todo && todo.completed ? "👌" : "👋"}{" "}
                {todo.content}</div>
          </div>
      </div>
    </li>
  </div>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);
