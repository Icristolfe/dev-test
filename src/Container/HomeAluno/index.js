import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import Logo from '../../assets/Logo.svg'
import Arrow from '../../assets/Icon.svg'

import {
  Container,
  ContainerItems,
  Header,
  StudentContainer,
  LabelAprov,
  LabelReprov,
  Logout
} from './styles'

export function Aluno() {

  const navigate = useNavigate()
  const [ studentInfo, setStudentInfo ] = useState([])
  
   

  useEffect(() => {

    async function getStudent(){

      const { data } = await api.get('/adm/student',)
      setStudentInfo(data)
    
    }

  },[])

  const userData = localStorage.getItem('devtestaluno:userData')
  const name = userData && JSON.parse(userData).student.firstName

  const dataScores = localStorage.getItem('devtestscore:userData')
  const score = dataScores && JSON.parse(dataScores)
  const newData = score.filter(student => {
    return student.firstName === name
  })


  function logout(){
    navigate('/alunologin')
    setTimeout(() => {
     localStorage.removeItem('devtest:userData')
    }, 1000);
    
  }
  return (
    <Container>
       <Header>
              <div className='headerLeft'>
              <img src={Logo} alt="logo" />
              <p style={{fontWeight: 600}}>Menu Item</p>
              <p>Menu Item</p>
              <p>Menu Item</p>
              <Logout onClick={logout} >Logout</Logout>
              </div>
              <div className='headerRight'>
              </div>
             </Header>
             <div className='topTable'>
             <h1>Meus Alunos</h1>
             </div>
             
      <ContainerItems>
            <div className='dataTable'>
              <div className='alignImage'>
            <p>Nome do Aluno</p>
            <img src={Arrow} alt='icon-arrow' />
            </div>
            <p>Atualização</p>
            <p>Av. 1</p>
            <p>Av. 2</p>
            <p>Av. 3</p>
            <p>Av. 4</p>
            <p>Média Final</p>
            <p>Situação</p>
            </div>

            {
              newData&& 
              newData.map((aluno, index) => (
                  <StudentContainer key={aluno.id}>
                    <p>{`${aluno.firstName} ${aluno.lastName}`}</p>
                    <div className='att'>
                    <p>{(aluno.updatedAt.substring(0,10))}</p>
                    <p className='hour'>
                      {
                        (aluno.updatedAt.substring(12,16))
                        }
                        </p> 
                    </div>
                    <p>{(aluno.scores[0].n1).toFixed(2)}</p>
                    <p>{(aluno.scores[0].n2).toFixed(2)}</p>
                    <p>{(aluno.scores[0].n3).toFixed(2)}</p>
                    <p>{(aluno.scores[0].n4).toFixed(2)}</p>
                    <p>{(aluno.scores[0].average).toFixed(2)}</p>
                    <div>
                      {
                    aluno.scores[0].situation === 'Aprovado' ? ( <LabelAprov>Aprovado</LabelAprov> )
                    : ( <LabelReprov>Reprovado</LabelReprov> )
                    }
                    </div>
                  </StudentContainer>
                ))
              
            }

      </ContainerItems>
    </Container>
  );
}