import styled from 'styled-components'

export const Input = styled.input`
  flex: 2;

  background-color: ${(props) => props.theme.background.input};
  border: 1px solid ${(props) => props.theme.border.input};
  border-radius: 0.5rem;
  padding-left: 1rem;
`
