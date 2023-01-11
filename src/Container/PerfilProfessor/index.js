import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'


import Logo from '../../assets/Logo.svg'

import {
  Container,
  ContainerItems,
  Header
} from './styles'
import { Button } from '../../Components'

export function PerfilProfessor() {

  const navigate = useNavigate()
  const [professor, setProfessor] = useState([])


  useEffect(() => { 
    
    async function getStudents(){

      
  const userData = await localStorage.getItem('devtest:userData')
  const name = userData && JSON.parse(userData).admin
  setProfessor(name)
      
    }
      
    getStudents()
  },[])

  function Home(){
    navigate('/professor')
  }

  return (
    <Container>
       <Header>
              <div className='headerLeft'>
              <img src={Logo} alt="logo" />
              <p style={{fontWeight: 600}}>Menu Item</p>
              <p>Menu Item</p>
              <p>Menu Item</p>
              </div>
              <div className='headerRight'>
                <Button onClick={Home}>Inicio</Button>
              </div>
             </Header>

             
             <ContainerItems>

          <h1>{ `${professor.firstName}` }</h1>
          <h1>{ `${professor.lastName}` }</h1>
          <h1>{ `${professor.email} ` }</h1>
        
          
        
        </ContainerItems>
    </Container>
  );
}