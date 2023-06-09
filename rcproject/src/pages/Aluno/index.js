import React, { useState, useEffect } from 'react'
import { Container } from '../../styles/globalstyles';
import { Form } from './styled';
import axios from '../../services/axios'
import Loading from '../../components/Loading'

function Aluno({ match }) {
  const { id } = match.params
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  // const [idade, setIdade] = useState('')
  // const [peso, setPeso] = useState('')
  // const [altura, setAltura] = useState('')

  useEffect(() => {
    if (!id) return
    async function loadData() {
      setIsLoading(true)
      try {
        setIsLoading(true)
        const { data } = await axios.get(`/alunos/${id}`)
        // const Foto = get(data, 'Fotos[0].url')

        setEmail(data.email)

      } catch (err) {
        setIsLoading(false)
      }
    }

    loadData()
    setIsLoading(false)
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // VALIDAR CAMPOS

    // Se tiver algum erro preecisamos retorrnar, para sair do function

    try {
      if (id) {
        // Editando
        await axios.put(`/aluno/${id}`, { nome, sobrenome, email })
        // toast.sucess
      } else {
        // Criando
        // toast.error
      }
    } catch (err) {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar Aluno' : 'Criar Aluno'}</h1>

      <Form onSubmit={e => handleSubmit(e)} >
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="nome" />
        <input type="text" value={sobrenome} onChange={e => setSobrenome(e.target.value)} placeholder="Sobrenome" />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

        <button type="submit" >Submit</button>
      </Form>
    </Container>
  )
}
export default Aluno
