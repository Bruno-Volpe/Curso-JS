import React, { useEffect, useState } from 'react'
import { get } from 'lodash'
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from '../../styles/globalstyles';
import Loading from '../../components/Loading';

import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled';

function Alunos() {
  const [alunos, setAlunos] = useState('')
  const [isLoading, setIisLooading] = useState(false)

  useEffect(() => {
    async function loadData() {
      setIisLooading(true)
      const response = await (await axios.get('/alunos')).data
      setAlunos(response)
      setIisLooading(false)

    }

    loadData()
  }, [])

  const handleDeleteAsk = (e) => {
    e.preventDefault()
    const exclamation = e.currentTarget.nextSibiling
    exclamation.setAttribute('display', 'block')
    e.currentTarget.remove()
  }

  const handleDelete = async (e, id, index) => {
    e.preventDefault()
    e.persist()
    try {
      setIisLooading(true)
      await axios.delete(`/alunos/${id}`)
      const novosAlunos = [...alunos]
      novosAlunos.splice(index, 1)
      setAlunos(novosAlunos)
      setIisLooading(false)

    } catch (err) {
      const errors = get('err', 'response.data.errors', [])
      setIisLooading(false)
      errors.map(error => {
        return toast.error(error)
      })
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <NovoAluno to="/aluno" >
        Novo Aluno
      </NovoAluno>

      <AlunoContainer>
        {
          alunos.map((aluno, index) => {
            return (
              <div key={String(aluno.id)} >
                <ProfilePicture>
                  {
                    get(aluno, 'Fotos[0].url', false) ? (
                      <img src={aluno.Fotos[0].url} alt="" />
                    ) : (
                      <FaUserCircle size={36} />
                    )
                  }
                </ProfilePicture>

                <span>
                  {aluno.nome}
                </span>
                <span>
                  {aluno.email}
                </span>

                <Link to={`/aluno/${aluno.id}/edit`} >
                  <FaEdit size={16} />
                </Link>

                <Link onClick={e => handleDeleteAsk(e)} to={`/aluno/${aluno.id}/delete`} >
                  <FaWindowClose size={16} />
                </Link>

                <FaExclamation size={16} display='none' cursor="pointer" onClick={e => handleDelete(e, aluno.id, index)} />
              </div>
            )
          })
        }
      </AlunoContainer>
    </Container>
  )
}
export default Alunos
