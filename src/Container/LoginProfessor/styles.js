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
  width: 80%;
  height: 80%;
  background: #FFF;
  display: flex;
  flex-direction: column;
  border-radius:  10px;
  padding: 0 25%;
  padding-top: 20px;

  h1 {
    margin-bottom: 50px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding-left: 7px;
  margin-bottom: 50px;
  background: #D3D3D3;
`

export const PageLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  color:#0066B3;

  &&:hover {
    opacity: 0.7;
  }
`

export const Label = styled.label`
 margin-bottom: 5px;
 font-weight: 500;
 margin-left: 5px;
`
export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 5px;
  margin-left: 5px;
`