import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: #D3D3D3;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContainerItems = styled.div`
  width: 60%;
  height: 80%;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius:  10px;
  padding: 0 10px;
  padding-top: 50px;
  gap: 30px;

  div {
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  }

  h1 {
    font-weight: 600;
  }
`

