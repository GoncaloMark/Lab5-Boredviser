import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 4px;
  background: #4B59F7;
  white-space: nowrap;
  padding: 12px 32px;
  font-weight: 600;
  color: #fff;
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background-color: #038c8c;
    transform: scale(0.97);
    box-shadow: 0 1px 5px 0 #676767;
  }
`;
