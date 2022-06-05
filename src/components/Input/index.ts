import styled from 'styled-components'

export const Input = styled.input`
  flex: 2;

  min-width: 3rem;

  background-color: ${(props) => props.theme.background.input};
  color: ${(props) => props.theme.color.font};

  font-size: 1.5rem;

  border: 1px solid ${(props) => props.theme.border.input};
  border-radius: 0.5rem;

  padding-left: 1rem;

  @media (max-width: 260px) {
    flex: initial;
    min-width: initial;

    width: 100%;
    height: 3rem;
  }
`
