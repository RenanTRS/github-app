import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
}

:root {
    font-size: 62.5%;
}

body{
    min-height: 100vh;
    width: 100%;
    padding: 1rem;

    background-color: ${(props) => props.theme.background.full};
}
`
