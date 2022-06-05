import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  background-color: ${(props) => props.theme.background.full};

  height: 5rem;

  padding: 1rem 0;

  position: fixed;
  top: 0;
  left: 1rem;
  right: 1rem;

  /* div {
    align-self: center;
  } */

  @media (max-width: 260px) {
    flex-wrap: wrap;

    position: initial;
  }
`
