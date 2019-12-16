/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '../IconButton/IconButton';
import { markAsDone, markAsPending, removeTodo } from './actions/todoActions';
import './Todo.css';

const TodoList = ({
  proplist, markAsDone, markAsPending, removeTodo, formDescription,
}) => {
  const renderRows = () => {
    const list = proplist || [];

    return list.map((todo) => (
      // eslint-disable-next-line no-underscore-dangle
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style="success" icon="check" hidden={todo.done} onClick={() => markAsDone(todo, formDescription)} />
          <IconButton style="warning" icon="undo" hidden={!todo.done} onClick={() => markAsPending(todo, formDescription)} />
          <IconButton style="danger" icon="trash-o" onClick={() => removeTodo(todo)} />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="todoActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

TodoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  markAsPending: PropTypes.func.isRequired,
  markAsDone: PropTypes.func.isRequired,
  proplist: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({ proplist: state.todo.list, formDescription: state.todo.description });
const mapDispatchToProps = (dispatch) => bindActionCreators({ removeTodo, markAsDone, markAsPending }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
