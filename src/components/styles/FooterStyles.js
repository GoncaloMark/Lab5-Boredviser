import styled from 'styled-components';

export const Box = styled.div`
  padding: 10px 10px;
  background: #262626;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const Flinks = styled.a`
  color: white;
  margin-bottom: 5px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 18px;
  color: #038c8c;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Copyright = styled.p`
margin-top: 15px;
text-align: center;
color: gray;
`;
