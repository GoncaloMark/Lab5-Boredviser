import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 8px;
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

export const ButtonC = styled.button`
  --green: #1BFD9C;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  margin-top:  ${({top}) => top};
  margin-left: ${({margin}) => margin};
  margin-right:  ${({right}) => right};
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
    left: -4em;
    width: 4em;
    height:100%;
    top:0;
    transition: transform .4s ease-in-out;
    background: linear-gradient(to right,  transparent 1%, rgba(27,253,156,0.1) 60%, transparent 100%);
  }
  
  &:hover:before
  {
    transform: translateX(15em);
  }
`

