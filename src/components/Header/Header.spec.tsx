import { render, screen, fireEvent } from '@testing-library/react'
import ResizeObserver from 'resize-observer-polyfill'
import { store } from '../../store'
import { Header } from '.'
import { Provider } from 'react-redux'

describe('Header component', () => {
  window.ResizeObserver = ResizeObserver

  const MockProvider = () => {
    return (
      <Provider store={store}>
        <Header theme="dark" />
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
})
