import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Box = styled.div`
  padding: 10px 10px;
  background: #262626;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: 76px;
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
  text-align: center;
  margin-left: 50px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const Flinks = styled(Link)`
  color: white;
  margin-bottom: 5px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #038c8c;
    transition: 200ms ease-in;
  }
`;
export const LinksF = styled.a`
  color: white;
  margin-bottom: 5px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #038c8c;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  margin-top:10px;
  font-weight: bold;
`;

export const Copyright = styled.p`
  margin-top: 15px;
  text-align: center;
  color: gray;
  font-size: 8px;
`;
