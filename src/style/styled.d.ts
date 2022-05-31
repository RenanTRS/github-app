import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    background: {
      full: string
      repo: string
      repoHover: string
    }
    color: {
      font: string
      link: string
    }
    border: {
      select: string
      unselect: string
      repo: string
    }
  }
}
