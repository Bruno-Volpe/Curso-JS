import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { get } from 'lodash';
import * as actions from './actions'
import * as types from '../types'
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload)
    yield put(actions.loginSucess(response.data))
    toast.success('Voce fez login')

    axios.defaults.headers.Autorization = `Bearer ${response.data.token}`
    history.push(payload.prevPath)

  } catch (err) {
    // Usuario n logado
    toast.error('Usuario ou senha invalidos')

    yield put(actions.loginFailure())
  }
}

function persistReHydrate({ payload }) {
  const token = get(payload, 'auth.token', '')
  if (!token) return
  axios.defaults.headers.Autorization = `Bearer ${token}`
}

function* registerReuqest({ payload }) {
  const { id, email, password, nome } = payload

  try {

    // Editar
    if (id) {
      yield call(axios.put('/users', {
        email,
        nome,
        password: password || undefined
      }))
      toast.success('Conta alterada com sucesso')
      yield put(actions.registerSucess({ nome, email, password }))
    } else { // Cadastrar
      yield call(axios.post('/users', {
        email,
        nome,
        password,
      }))
      toast.success('Conta criada com sucesso')
    }

  } catch (e) {
    const errors = get(e, 'response.data.errors', [])
    // const status = get(e, 'response.status', false)

    if (errors.length > 0) {
      errors.map(error => toast.error(error))
    } else {
      toast.error('Erro desconheciido')
    }

    yield put(actions.regusterFaiilure())
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistReHydrate()),
  takeLatest(types.REEGISTER_REQUEST, registerReuqest()),
])
