import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(props) => props.theme.button.background};
  color: ${(props) => props.theme.button.font};
  font-weight: bold;

  padding: 0.5rem 1rem;

  border: none;

  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.button.backgroundHover};
  }
`
