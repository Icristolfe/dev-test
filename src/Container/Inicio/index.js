import React from 'react'
import { useNavigate } from 'react-router-dom'


import { Container, ContainerItems } from './styles'
import { Button } from '../../Components/Button'

export function Inicio() {

  const navigate = useNavigate()

  return (
    <Container>
      <ContainerItems>
              <h1>Escola Mundial</h1>
              <div>
            <Button init={true} onClick={() => navigate('/proflogin')} >Professor</Button>
            <Button init={true} onClick={() => navigate('/alunologin')} >Aluno</Button>
            </div>
      </ContainerItems>
    </Container>
  );
}