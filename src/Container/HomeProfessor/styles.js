import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: #D3D3D3;
  align-items: center;
  flex-direction: column;

  .topTable {
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
  }

  h1 {
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #000000;
  }
`

export const ContainerItems = styled.div`
  width: 95% ;

 .dataTable{
  width: 100%;
  height: 58px;
  background: #F3F4F6;
  border-radius: 6px 6px 0px 0px;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr  ;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  justify-items: center;
  padding-right: 20px;
 }

 p {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.002em;
  color: #131313;
 }

 .alignText {
  display: flex;
  align-items: center;
  justify-content: center;
 }

 .alignImage{
    display: flex;
    gap: 5px;
    padding-left: 10px;
  }
`

export const Header = styled.div`
  background: #FFFFFF;
  width: 100%;
  height: 112px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 45px;

 .headerLeft{

  display: flex;
  flex-direction: row;
  gap:44px;
  font-size: 16px;
  }

  img {
    width: 90px;
    height: 35px;
  }
`
export const StudentContainer = styled.div`
  width: 100%;
  height: 68px;
  background: #FFFFFF;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr  ;
  align-items: center;
  justify-items: center;
  padding-right: 20px;
  margin-bottom: 8px;

  p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.002em;
  color: #131313;
  }

 
  .hour {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.005em;
  color: #9CA3AF;
  }

  .att{
    margin-left:10px;
  }


 
`

export const LabelAprov = styled.label`
  align-items: center;
  padding: 6px 24px;
  gap: 10px;
  width: 113px;
  height: 32px;
  background: #BBF7D0;
  border-radius: 1000px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.005em;
  color: #131313;
  `

export const LabelReprov = styled.label`
  align-items: center;
  padding: 6px 24px;
  gap: 10px;
  width: 113px;
  height: 32px;
  background: #FFFFFF;
  border-radius: 1000px;
  opacity: 0.9;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.005em;
  color: #FF0000;
  border: 1px  solid #FF0000;
  

`

export const Logout = styled.a `
  cursor: pointer;

  &&:hover{
    opacity: 0.8;
    color: #FF0000 ;
  }
`