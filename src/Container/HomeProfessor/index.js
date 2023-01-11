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
import { Button, Input } from '../../Components'

export function Professor() {

  const navigate = useNavigate()
  const [ studentInfo, setStudentInfo ] = useState([])
  const [ filterStudent, setFilterStudent ] = useState()
  
  const [ inputValue, setInputValue ] = useState()


  useEffect(() => {

    async function getStudents(){

      const { data } = await api.get('/adm/student',)
 
      setStudentInfo(data)
      await localStorage.setItem('devtestscore:userData', JSON.stringify(data))
    }
    getStudents()
  },[])

  useEffect(() => {
    
  },[])

  function handleClick(e) {
    setInputValue(e)
    if(inputValue) {
      const newData = studentInfo.filter(student => {
        return student.firstName === inputValue
      })
      setFilterStudent(newData)
    }
    else {
      setFilterStudent(false)
    }
   
    
  }

  function Admin(){
    navigate('/perfil')
  }

  function logout(){
    navigate('/proflogin')
    setTimeout(() => {
     localStorage.removeItem('devtest:userData')
    }, 2000);
    
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
                <Button onClick={Admin} >Perfil</Button>
              </div>
             </Header>
             <div className='topTable'>
             <h1>Meus Alunos</h1>
             <Input keyPress={handleClick} setInputValue={handleClick} clickValue={handleClick} />
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
              filterStudent ? (
                filterStudent.map((aluno, index) => (
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
              ) : (
                studentInfo.map((aluno, index) => (
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
              )
            }
      </ContainerItems>
    </Container>
  );
}