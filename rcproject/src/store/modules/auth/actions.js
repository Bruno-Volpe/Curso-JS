import * as types from '../types'

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload
  }
}

export function loginSucess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  }
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload
  }
}

export function regiisterReuqest(payload) {
  return {
    type: types.REEGISTER_REQUEST,
    payload
  }
}

export function regusterFaiilure(payload) {
  return {
    type: types.REEGISTER_FAILUREE,
    payload
  }
}
export function registerSucess(payload) {
  return {
    type: types.REGISTER_UPDATED_SUCESS,
    payload
  }
}
