import React, { useState } from 'react'
import { toast } from 'react-toastify';
// import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux'
import { Container } from '../../styles/globalstyles';
import { Form } from './styled';
// import axios from '../../services/axios';
// import history from '../../services/history';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions'

function Register() {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [password, setPassword] = useState('')

  const id = useSelector(state => state.auth.user.id)
  const nomeStoraged = useSelector(state => state.auth.user.nome)
  const emailStoraged = useSelector(state => state.auth.user.email)
  const isLoading = useSelector(state => state.auth.user.isLoading)

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!id) return

    setEmail(emailStoraged)
    setNome(nomeStoraged)
  }, [id, nomeStoraged, emailStoraged])

  async function handleSubmit(e) {
    e.preventDefault()
    let formErrors = false

    // chegando nome
    if (nome.length < 3 || nome.length > 255) {
      formErrors = true
      toast.error('Nome 3-255 caracteres')
    }

    // checando senha
    if (!id && (password.length < 6 || password.length > 255)) {
      formErrors = true
      toast.error('Senha 6-255 caracteres')
    }

    // podemos checar email com validator


    if (formErrors) return

    // try {
    //   setIisLooading(true)
    //   await axios.post('/users/', {
    //     nome, password, email
    //   })

    //   setIisLooading(false)
    //   toast.success('Voce fez seu cadastro')
    //   history.push('/')
    // } catch (err) {
    //   // Preecisamos capturar e exibir o erro
    //   // const status = get(err, 'response.status', false)
    //   const errors = get(err, 'response.data.errors', [])
    //   setIisLooading(false)

    //   errors.map((error) => {
    //     return toast.error(error)
    //   })
    // }

    dispatch(actions.regiisterReuqest({ nome, email, password, id }))
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

      <Form onSubmit={e => handleSubmit(e)} >
        <label htmlFor="nome" >
          Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

        </label>

        <label htmlFor="email" >
          Email:
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>

        <label htmlFor="password" >
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button type="submit" >Submit</button>
      </Form>
    </Container>
  )
}
export default Register
