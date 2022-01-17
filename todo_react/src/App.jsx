import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from './compornents/InputTodo';
import { InconpleteTodos } from './compornents/IncompleteTodos';
import { ComplateTodos } from './compornents/ComplateTodos';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickcomplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <React.Fragment>
      <InputTodo todoText={todoText} onChange={onChangeText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5} />
      {incompleteTodos.length >= 5 && <p style={{ color: 'red' }}>登録できるTodoは5個までです</p>}
      <InconpleteTodos todos={incompleteTodos} onClickcomplete={onClickcomplete} onClickDelete={onClickDelete} />
      <ComplateTodos todos={completeTodos} onClickBack={onClickBack} />
    </React.Fragment>
  )
};