import styled from 'styled-components'

export const Label = styled.label`
    display: block;
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;

    `

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
    
  
  &:focus {
    outline: none !important;
    border: 1px solid #1BFD9C;
    box-shadow: 0 0 10px #719ECE;
  }
  `


