import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    background: {
      full: string
      repo: string
      repoHover: string
      input: string
    }
    color: {
      font: string
      link: string
    }
    border: {
      select: string
      unselect: string
      repo: string
      input: string
    }
    button: {
      background: string
      backgroundHover: string
      font: string
    }
    switchToggle: {
      checked: {
        color: string
        handlerColor: string
      }
      unChecked: {
        color: string
        handlerColor: string
      }
    }
  }
}
