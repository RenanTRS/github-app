import { memo } from 'react'
import styled from 'styled-components'

export const Button = memo(styled.button`
  background-color: ${(props) => props.theme.button.background};
  color: ${(props) => props.theme.button.font};

  font-weight: bold;
  font-size: 1.5rem;

  padding: 0.5rem 1rem;

  border: none;
  border-radius: 0.5rem;

  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.button.backgroundHover};
  }

  @media (max-width: 260px) {
    flex: 1;
  }
`)
