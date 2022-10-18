import { render, screen, fireEvent } from '@testing-library/react'
import ResizeObserver from 'resize-observer-polyfill'
import { store } from '../../store'
import { Provider } from 'react-redux'
import { Header } from '.'

describe('Header component', () => {
  window.ResizeObserver = ResizeObserver
  const submitFn = jest.fn() //mock function

  const MockProvider = () => {
    return (
      <Provider store={store}>
        <Header user="someone" submit={submitFn} />
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
    it('should be able to type on the input', () => {
      render(<MockProvider />)

      const inputElement = screen.getByRole('textbox') as HTMLInputElement
      fireEvent.change(inputElement, { target: { value: 'something' } })

      expect(inputElement.value).toBe('something')
      expect(inputElement.value).not.toBe('somethi')
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

    it('should not be able to call the function when click this button with input empty', () => {
      render(<MockProvider />)

      const inputElement = screen.getByPlaceholderText(
        'Pesquisar usuário...'
      ) as HTMLInputElement
      const buttonElement = screen.getByRole('button', {
        name: 'Buscar'
      }) as HTMLButtonElement

      fireEvent.change(inputElement, { target: { value: '' } })

      fireEvent.click(buttonElement)

      expect(buttonElement).toBeDisabled()
      expect(submitFn).not.toBeCalled()
    })
  })
})
