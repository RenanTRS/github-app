import { render, screen } from '@testing-library/react'
import { UserHeader } from '.'

import { MockProv } from 'services/mocks/MockProv'
import { mockUser } from 'services/mocks/response'

const MockProvider = () => {
  return (
    <MockProv>
      <UserHeader user={mockUser} />
    </MockProv>
  )
}
describe('UserHeader component', () => {
  it('should render a avatar', () => {
    render(<MockProvider />)

    const avatar = screen.getByRole('img')
    expect(avatar).toBeInTheDocument()
  })
  it('should render name and username', () => {
    render(<MockProvider />)

    const name = screen.getByText('Something')
    const username = screen.getByText('SomethingUser')

    expect(name).toBeInTheDocument()
    expect(username).toBeInTheDocument()
  })
  it('should render infoUser', () => {
    render(<MockProvider />)

    const location = screen.getByText('Brazil')
    const following = screen.getByText('5')
    const followers = screen.getByText('9')
    const public_repos = screen.getByText('15')

    expect(location).toBeInTheDocument()
    expect(following).toBeInTheDocument()
    expect(followers).toBeInTheDocument()
    expect(public_repos).toBeInTheDocument()
  })
})
