import { legacy_createStore as createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
