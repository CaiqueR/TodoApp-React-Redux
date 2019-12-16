/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-underscore-dangle */
import React from 'react';

import PageHeader from '../PageHeader/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const todo = () => (
  <div>
    <PageHeader name="Tarefas" small="Cadastro" />
    <TodoForm />
    <TodoList />
  </div>
);

export default todo;
