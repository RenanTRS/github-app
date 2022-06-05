import styled from 'styled-components'

export const Main = styled.main``

type StyleProp = {
  image: string
}
export const Section = styled.section<StyleProp>`
  height: calc(100vh - 10rem);
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30rem;
`
