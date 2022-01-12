import styled, { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


body {
    margin: 0;
    background-image: url("");
    background-repeat: no-repeat, repeat;
    font-family: 'Sora', sans-serif;;
}
`;


export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
`;

export default GlobalStyles;