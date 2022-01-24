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
  margin: 1rem auto auto;
  cursor: default;

  & h2 {
    color: #fff;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  & h4
  {
    color: #fff;
    margin-bottom: 1rem;
    margin-top: 2rem;
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
    cursor: pointer;
  }
  `

export const ContainerP = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: ${({theme}) => theme.size.LPW};
  height: ${({theme}) => theme.size.LPH};
  margin: 1rem auto auto;
  cursor: default;

  & h2 {
    color: #fff;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
  
  & h4 {
    display: inline;
    color: #fff;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    margin-right: 2rem;
    flex-direction: row;
  }

  & div {
    padding-left: 40px;
    padding-bottom: 10px;
    padding-top: 20px;
  }
  
  & input
  {
    color: white;
  }

  & button
  {
    display: block;
    --green: #1BFD9C;
    font-size: 15px;
    padding: 0.7em 1em;
    margin-right: 10em;
    margin-top: 1em;
    cursor: pointer;
    letter-spacing: 0.06em;
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 1.4em;
    border: 2px solid var(--green);
    background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
    color: var(--green);
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);

    &:hover
    {
      color: #82ffc9;
      box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
    }

    &::before
    {
      content: "";
      position: absolute;
      left: -1em;
      width: 4em;
      height:100%;
      top:0;
      transition: transform .4s ease-in-out;
      background: linear-gradient(to right,  transparent 1%, rgba(27,253,156,0.1) 60%, transparent 100%);
    }
    
    &:disabled
    {
      color: white;
      background: gray;
      box-shadow: none;
      border: gray;
      
      &::before
      {
        transform: none;
        transition: none;
      }
    }

    &:hover:before
    {
      transform: translateX(6.5em);
    }
  }

    
`


export const Container_Card = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* width: ${({ theme }) => theme.size.LPW};
  height: ${({ theme }) => theme.size.LPH}; */
  margin: 1rem auto auto;
  cursor: default;
  `

