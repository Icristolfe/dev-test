import styled from 'styled-components'

export const Container = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
`

export const ContainerButton = styled.button`
  width: 40px;
  height: 38px;
  background: none;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  
  img  {
    width: 20px;
    height: 20px;
  }
`
export const ContainerInput = styled.input`
  padding: 8px 16px;
  isolation: isolate;
  width: 280px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #D1D5DB;
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

