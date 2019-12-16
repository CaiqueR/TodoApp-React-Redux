import api from '../../../services/api';


export const changeDescription = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value,
});

export const search = (description = '') => {
  const search = description ? `&description__regex=/${description}/` : '';
  const req = api.get(`/todos?sort=-createdAt${search}`);
  return {
    type: 'TODO_SEARCHED',
    payload: req,
  };
};

export const clear = () => ([{ type: 'TODO_CLEAR' }, search()]);

export const addTodo = (description) => (dispatch) => {
  api.post('/todos', { description })
    .then(() => dispatch(clear())).then(() => dispatch(search()));
};

export const markAsDone = (todo) => (dispatch, getState) => {
  const { description } = getState().todo;
  api.put(`/todos/${todo._id}`, { ...todo, done: true })
    .then((result) => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: result.data }))
    .then(() => dispatch(search(description)));
};

export const markAsPending = (todo) => (dispatch, getState) => {
  const { description } = getState().todo;
  api.put(`/todos/${todo._id}`, { ...todo, done: false })
    .then(() => dispatch(search(description)));
};

export const removeTodo = (todo) => (dispatch) => {
  api.delete(`/todos/${todo._id}`)
    .then(() => dispatch(search()));
};


// export default changeDescription;
