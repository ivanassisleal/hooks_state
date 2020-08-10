import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ListTodos from "./components/ListTodos";
import TodoItem from "./models/TodoItem";
import Input from "./components/Input";
import Button from "./components/Button";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<TodoItem>({ title: "" });

  // functions
  function handleClickButton() {
    setTodos([...todos, { ...newTodo }]);
    setNewTodo({ title: "" });
  }

  // hooks
  useEffect(() => {
    setTodos([{ title: "eat" }, { title: "sleep" }]);
  }, []);

  return (
    <>
      <Header />
      <Input
        name="add"
        value={newTodo?.title}
        onChange={(e) => setNewTodo({ title: e.target.value })}
      />
      <Button onClick={() => handleClickButton()}>add</Button>
      <ListTodos todos={todos} />
    </>
  );
};

export default App;
