import styled from 'styled-components'

export const Card_Container = styled.div`
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.5s;
  animation: ease-in;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 15px 0px;
  }
`;

export const Card_Content = styled.div`
margin: 1rem;
margin-top: 0.3rem;
`

export const Card_H3 = styled.h3`
    margin: 0;
    padding: 0;
`

export const Card_P = styled.p`
    margin: 0;
    padding: 0;
`

export const Card_Title = styled.p`
    margin-bottom: 0.5rem;
`


