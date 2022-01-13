import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 800px;
  height: 400px;
  margin: 3rem auto auto;
  cursor: default;

  & h2 {
    color: #fff;
    padding-left: 40px;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  & p {
    color: #fff;
    padding-left: 40px;
    padding-bottom: 10px;
    width: 75%;
    line-height: 1.5rem;
  }
`
