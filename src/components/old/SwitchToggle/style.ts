import styled from 'styled-components'
export const SwitchContainer = styled.div`
  @media (max-width: 260px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  button[data-state] {
    width: 4rem;
    height: 2.4rem;
    @media (max-width: 260px) {
      width: 10rem;
      height: 1rem;
    }
    span[data-state] {
      width: 2rem;
      height: 2rem;

      @media (max-width: 260px) {
        width: 1rem;
        height: 0.8rem;
      }
    }
    span[data-state='checked'] {
      @media (max-width: 260px) {
        transform: translateX(8.8rem);
      }
    }
  }
`
