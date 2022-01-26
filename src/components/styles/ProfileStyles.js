import styled from 'styled-components'


export const InputPerfil = styled.input`
    background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.1rem;
  width: 90%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: white  !important;;
  font-size: 1rem;
  font-weight: lighter;
    
  
  &:focus {
    outline: none !important;
    border: 2px solid #1BFD9C;
    box-shadow: 0 0 10px #719ECE;
  }
  `