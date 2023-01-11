import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import { Container,
  ContainerItems,
  Input,
  PageLink,
  Label,
  ErrorMessage
} from './styles'
import { Button } from '../../Components/Button'

export function LoginProf() {

  const navigate = useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('digite um e-mail válido')
      .required('o e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('/adm/admin/login', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja Bem Vindo(a)',
        error: 'Verifique seu email e senha'
      }
    )
    navigate('/professor')
    
    await localStorage.setItem('devtest:userData', JSON.stringify(data))

  }




  return (
    <Container>
      <ContainerItems>
      <h1>Professor</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>Email</Label>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <Input
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
            

            <Label>Senha</Label>
             <ErrorMessage>{errors.password?.message}</ErrorMessage>
            <Input
              type="password"
              {...register('password')}
              error={errors.email?.message}
            />
          
            <Button
              type="submit"
              style={{
                marginBottom: 25
              }}
            >
              Login
            </Button>
          </form>
      <PageLink onClick={() => navigate('/alunologin')}>Sou Aluno</PageLink>
      </ContainerItems>
    </Container>
  );
}


