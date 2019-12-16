/* eslint-disable no-unused-expressions */
/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Grid from '../Grid/Grid';
import IconButton from '../IconButton/IconButton';
import {
  changeDescription, search, addTodo, clear,
} from './actions/todoActions';


class TodoForm extends Component {
  constructor(props) {
    super(props);
    const { search } = this.props;
    search();
  }

  keyHandler = (e) => {
    const {
      search, addTodo, description, clear,
    } = this.props;
    if (e.key === 'Enter') {
      e.shiftKey ? search(description) : addTodo(description);
    } else if (e.key === 'Escape') {
      clear();
    }
  };

  render() {
    const {
      description, changeDescription: trocarDescricao,
      addTodo, search, clear,
    } = this.props;

    return (
      <div role="form" className="todoForm input-group my-4">
        <Grid cols="12 9 10">
          <input
            className="form-control "
            id="description"
            onKeyUp={this.keyHandler}
            placeholder="Adicione uma tarefa"
            value={description}
            onChange={trocarDescricao}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton style="primary ml-2" icon="plus" onClick={() => addTodo(description)} />
          <IconButton style="info" icon="search" onClick={() => search(description)} />
          <IconButton style="secondary" icon="close" onClick={() => clear()} />
        </Grid>
      </div>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  // handleChange: PropTypes.func.isRequired,
  changeDescription: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ description: state.todo.description });
const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeDescription, search, addTodo, clear,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
