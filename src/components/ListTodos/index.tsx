import React from "react";
import TodoItem from "../../models/TodoItem";

interface Props {
  todos: TodoItem[];
}

const ListTodos: React.FC<Props> = ({ todos }) => {
  return (
    <>
      <ul>
        {todos?.map((t) => (
          <li>{t.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ListTodos;
