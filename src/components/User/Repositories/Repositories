import { render, screen } from '@testing-library/react'
import { Repositories } from '.'

import { MockProv } from 'services/mocks/MockProv'
import { mockRepos } from 'services/mocks/response'

const MockProvider = () => {
  return (
    <MockProv>
      <Repositories repos={mockRepos} />
    </MockProv>
  )
}

describe('Repositories component', () => {
  it('should render anchors ', () => {
    render(<MockProvider />)

    const anchors = screen.getByRole('link')
    expect(anchors).toBeInTheDocument()
  })
  it('should render headings', () => {
    render(<MockProvider />)

    const headings = screen.getByRole('heading')
    expect(headings).toBeInTheDocument()
  })
  it('should render infos', () => {
    render(<MockProvider />)

    const spans = screen.getAllByRole('span')
    const topics = screen.getAllByRole('topics')
    expect(spans.length).toBe(4)
    expect(topics.length).toBe(3)
  })
})
