import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 100%;
  height: 36.13px;
  background: #0066B3;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  border-radius: 6px;

  &&:hover {
    opacity: 0.8; 
  -webkit-transform: ${props => (props.init ? 'translateY(-6px)' : 'none')} ;  
  -ms-transform:${props => (props.init ? 'translateY(-6px)' : 'none')} ;  
  transform:${props => (props.init ? 'translateY(-6px)' : 'none')} ;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.69);  

  }

  &&:active {
    opacity: 0.5;
  }
`
