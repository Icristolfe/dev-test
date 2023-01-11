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
  width: 75% ;
  height: 40%;
  background: #FFF;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
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


