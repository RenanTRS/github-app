import { render, screen, fireEvent } from '@testing-library/react'
import ResizeObserver from 'resize-observer-polyfill'
import { store } from '../../store'
import { Search } from '.'
import { Provider } from 'react-redux'

describe('Search component', () => {
  window.ResizeObserver = ResizeObserver
  const submitFn = jest.fn() //mock function

  const MockProvider = () => {
    return (
      <Provider store={store}>
        <Search submit={submitFn} />
      </Provider>
    )
  }

  describe('Title', () => {
    it('should be able to render the title', () => {
      render(<MockProvider />)

      const isTitleVisible = screen.getByText('GitHub-App')
      expect(isTitleVisible).toBeInTheDocument()
    })
  })

  describe('Input', () => {
    it('should be able to render the input', () => {
      render(<MockProvider />)

      const isInputVisible = screen.getByRole('textbox') as HTMLInputElement
      expect(isInputVisible).toBeInTheDocument()
    })
    it('should be able to type on the input', () => {
      render(<MockProvider />)

      const input = screen.getByRole('textbox') as HTMLInputElement
      fireEvent.change(input, { target: { value: 'someone' } })

      expect(input.value).toEqual('someone')
    })
  })

  describe('Button', () => {
    it('should be able to render the button', () => {
      render(<MockProvider />)

      const isButtonVisible = screen.getByRole('button', {
        name: 'Buscar'
      }) as HTMLButtonElement

      expect(isButtonVisible).toBeInTheDocument()
    })

    it('should not be able to call the function when click this button without to type the user in the input', () => {
      render(<MockProvider />)

      const buttonElement = screen.getByRole('button', {
        name: 'Buscar'
      }) as HTMLButtonElement
      fireEvent.click(buttonElement)

      expect(submitFn).not.toBeCalledTimes(1)
      expect(submitFn).not.toBeCalledTimes(2)
    })

    it('should be able to call the function when click this button after to type the user in the input', () => {
      render(<MockProvider />)
      const inputElement = screen.getByRole('textbox') as HTMLInputElement
      const buttonElement = screen.getByRole('button', {
        name: 'Buscar'
      }) as HTMLButtonElement

      fireEvent.change(inputElement, { target: { value: 'someone' } })
      fireEvent.click(buttonElement)

      expect(submitFn).toBeCalledTimes(1)
      expect(submitFn).not.toBeCalledTimes(2)
    })
  })
})
