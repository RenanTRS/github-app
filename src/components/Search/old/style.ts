import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  background-color: ${(props) => props.theme.background.full};

  height: 5rem;
  width: 100%;
  max-width: 140rem;

  padding: 1rem;

  position: fixed;
  top: 0;
  left: auto;
  right: auto;

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex: 1;
  }

  @media (max-width: 260px) {
    flex-wrap: wrap;
    gap: 1rem;

    position: initial;
  }
`
