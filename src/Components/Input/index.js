import PropTypes from 'prop-types'
import React from 'react'
 import Search from '../../assets/search.svg'
import  {Container, ContainerButton, ContainerInput} from './styles.js'

export function Input( props) {
    function onChangeValue(e) {
      props.setInputValue(e.target.value)
      props.clickValue(e.target.value)

      if(e === 'Enter') {
        props.keyPress(e)
      }
    }

   
  return (
    <Container>
      <ContainerInput onKeyPress={onChangeValue} onChange={onChangeValue} placeholder='Pesquisar alunos' />
      <ContainerButton><img src={Search} alt='search' /></ContainerButton>
    </Container>
    
    
  )
 
}

Input.propTypes = {
  children: PropTypes.string
}
