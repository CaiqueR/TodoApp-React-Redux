const INITIAL_STATE = {
  description: '',
  list: [],
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload };
    case 'TODO_SEARCHED':
      return {
        ...state, list: action.payload.data,
      };
    case 'TODO_ADDED':
    case 'TODO_CLEAR':
      return { ...state, description: '' };
    default:
      return state;
  }
};


// export default function todos() {
//   return ({
//     description: 'Lista',
//     list: [{
//       _id: 1,
//       description: 'Pagar fartura do cartão',
//       done: true,
//     }, {
//       _id: 2,
//       description: 'Reuniao com os chefao',
//       done: false,
//     }, {
//       _id: 3,
//       description: 'Consulta medicas na terça depois do almoço',
//       done: false,
//     }],
//   });
// }
