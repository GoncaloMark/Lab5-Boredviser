import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: ${({ theme }) => theme.size.LPW};
  height: ${({ theme }) => theme.size.LPH};
  margin: 3rem auto auto;
  cursor: default;

  & h2 {
    color: #fff;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  & p {
    color: #fff;
    width: 75%;
    line-height: 1.5rem;
  }
  
  & div
  {
    padding-left: 40px;
    padding-bottom: 10px;
    padding-top: 20px;
  }
`

export const ContainerRegister = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 2rem;
  padding-top: 2rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: ${({ theme }) => theme.size.RW};
  height: ${({ theme }) => theme.size.RH};
  margin: 1rem auto auto;
  cursor: default;
  
  & input
  {
    margin-bottom: 1em;
  }
  
  & h2
  {
    color:white;
    padding-bottom: 1rem;
  }
  
  & span
  {
    color: white;
    text-decoration: underline;
  }
  
  & p
  {
    color:white;
    margin-top: 1rem;
  }
`