import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash';
import { Container } from '../../styles/globalstyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions'
import Loading from '../../components/Loading';

function Login(props) {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.auth.isLoading)

  const prevPath = get(props, 'location.state.prevPath', '/')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    let formErrors = false

    // checando senha
    if (password.length < 6 || password.length > 255) {
      formErrors = true
      toast.error('Senha Invalida')
    }

    // podemos checar email com validator


    if (formErrors) return

    // se passar vamos disparar uma action para redux-saga
    dispatch(actions.loginRequest({ email, password, prevPath }))
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>

      <Form onSubmit={e => handleSubmit(e)} >
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Seu e-mail..." />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Sua senha..." />
        <button type="submit" >Acessar</button>
      </Form>
    </Container>
  )
}
export default Login
