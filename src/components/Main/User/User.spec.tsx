import { render, screen } from '@testing-library/react'
import { MockProvider } from './mock'

describe('User component', () => {
  it('should be able to render data user', () => {
    render(<MockProvider />)

    const avatar = screen.getByTestId('avatar-user')
    const name = screen.getByText('Someone')
    const username = screen.getByText('someone123')
    const location = screen.getByText('somelocation')
    const followers = screen.getByText(2)
    const following = screen.getByText(3)
    const repositories = screen.getByText(4)

    expect(avatar).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(username).toBeInTheDocument()
    expect(location).toBeInTheDocument()
    expect(followers).toBeInTheDocument()
    expect(following).toBeInTheDocument()
    expect(repositories).toBeInTheDocument()
  })
})
