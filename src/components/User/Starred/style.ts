import styled from 'styled-components'

export const Repos = styled.div`
  margin-top: 1rem;
  width: 100%;
`
export const WrapperRepos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const Repo = styled.li`
  width: 100%;
  max-width: 50rem;
  padding: 1rem;

  background-color: ${(props) => props.theme.background.repo};
  box-shadow: 2px 5px 4px ${(props) => props.theme.border.repo};

  border-radius: 0.8rem;

  overflow: hidden;

  :hover {
    background-color: ${(props) => props.theme.background.repoHover};
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    color: ${(props) => props.theme.color.font};

    text-decoration: none;
  }
`

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`

export const Description = styled.span`
  font-size: 1.5rem;
`
export const ValuesItens = styled.div`
  display: flex;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    font-size: 1.5rem;
  }
`

export const Topics = styled.ul`
  display: flex;
  gap: 1rem;

  width: 100%;

  overflow-x: scroll;
`

export const Topic = styled.li`
  background-color: ${(props) => props.theme.background.topic};
  color: ${(props) => props.theme.color.topic};
  border-radius: 0.8rem;

  padding: 1rem;

  font-size: 1.4rem;
  font-weight: bold;
  white-space: nowrap;
`
