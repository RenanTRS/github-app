import styled from 'styled-components'

export const UserStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 0;
`

export const ShowRepo = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  max-width: 50rem;

  margin-top: 1rem;
`
const SpanShow = styled.span`
  background-color: ${(props) => props.theme.background.showRepo};
  color: ${(props) => props.theme.color.font};

  font-size: clamp(1rem, 5vw, 2rem);

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
  font-weight: ${(props) => (props.shad ? 'bold' : 'normal')};
`

export const StarShow = styled(SpanShow)<ShowProp>`
  box-shadow: ${(props) =>
    props.shad ? '0px 1px 6px #00000046' : '0px 1px 6px 6px #00000047'};
  font-weight: ${(props) => (props.shad ? 'normal' : 'bold')};
`
