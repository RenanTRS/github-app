import { render, screen, fireEvent } from '@testing-library/react'
import ResizeObserver from 'resize-observer-polyfill'
import { store } from '../../store'
import { Provider } from 'react-redux'
import { Header } from '.'

describe('Header component', () => {
  window.ResizeObserver = ResizeObserver
  const MockProvider = () => {
    return (
      <Provider store={store}>
        <Header user="someone" />
      </Provider>
    )
  }

  describe('Input', () => {
    it('should be able to render the input', () => {
      render(<MockProvider />)

      const isInputRendered = screen.getByRole('textbox') as HTMLInputElement

      expect(isInputRendered).toBeInTheDocument()
    })

    it('should be able start with the value', () => {
      render(<MockProvider />)

      const input = screen.getByRole('textbox') as HTMLInputElement

      expect(input.value).not.toBe('someon')
      expect(input.value).toBe('someone')
    })
  })

  describe('Button', () => {
    it('should be able to render the button', () => {
      render(<MockProvider />)

      const isButtonRendered = screen.getByRole('button', {
        name: 'Buscar'
      }) as HTMLButtonElement

      expect(isButtonRendered).toBeInTheDocument()
    })
  })
})
