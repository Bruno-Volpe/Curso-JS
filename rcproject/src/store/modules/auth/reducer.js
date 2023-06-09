import * as types from '../types';

const initialState = {
  isLogedIn: false,
  token: false,
  user: {},
  isLoading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }

    case types.LOGIN_SUCCESS: {
      const newState = { ...state }
      newState.isLogedIn = true
      newState.token = action.payload.token
      newState.user = action.payload.user
      newState.isLoading = false

      return newState
    }

    case types.BOTAO_CLICADO_FAILURE: {
      const newState = { ...initialState }
      return newState
    }

    case types.REEGISTER_REQUEST: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }

    case types.REEGISTER_FAILUREE: {
      const newState = { ...state }
      newState.isLoading = false
      return newState
    }


    case types.REEGISTER_SUCESS: {
      const newState = { ...state }
      newState.isLoading = false
      newState.user.nome = action.payload.user.nome
      newState.user.email = action.payload.user.email
      return newState
    }

    default:
      return state
  }

}
