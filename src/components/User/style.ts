import styled from 'styled-components'

export const UserStyle = styled.div`
  padding: 1rem 0;
`

export const ShowRepo = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;

  margin-top: 1rem;
`
const SpanShow = styled.span`
  background-color: ${(props) => props.theme.background.showRepo};
  color: ${(props) => props.theme.color.font};

  font-size: 1.5rem;

  border-radius: 4rem;
  padding: 1rem;
  cursor: pointer;
`
type ShowProp = {
  shad: boolean
}

export const RepoShow = styled(SpanShow)<ShowProp>`
  box-shadow: ${(props) =>
    props.shad ? '0px 1px 6px 6px #00000047' : '0px 1px 6px #00000046'};
`

export const StarShow = styled(SpanShow)<ShowProp>`
  box-shadow: ${(props) =>
    props.shad ? '0px 1px 6px #00000046' : '0px 1px 6px 6px #00000047'};
`
