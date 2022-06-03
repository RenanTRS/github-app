import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Header } from '.'
import light from 'style/themes/light'

describe('Header Component', () => {
  const callback = jest.fn()
  const MockThemeProvider = () => {
    return (
      <ThemeProvider theme={light}>
        <Header onclick={callback} />
      </ThemeProvider>
    )
  }
  it('should render a input', () => {
    render(<MockThemeProvider />)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })
  it('should render a button', () => {
    render(<MockThemeProvider />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
  it('should call a function', () => {
    render(<MockThemeProvider />)

    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)

    expect(callback).toBeCalledTimes(1)
  })
})
