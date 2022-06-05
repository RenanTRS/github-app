import styled from 'styled-components'

export const Main = styled.main`
  max-width: 140rem;
  margin: 0 auto;
`

type StyleProp = {
  image: string
}
export const Section = styled.section<StyleProp>`
  height: calc(100vh - 10rem);
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30rem;

  margin-top: 3rem;
`
export const NotUser = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: red;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;

  margin-top: 4rem;
  height: calc(100vh - 10rem);
  width: 100%;

  svg {
    font-size: clamp(14rem, 6vw, 33rem);
  }
`
