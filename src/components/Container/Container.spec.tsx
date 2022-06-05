import { render, screen, fireEvent } from '@testing-library/react'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { MockProv } from 'services/mocks/MockProv'
import { mockRepos, mockUser, mockStars } from 'services/mocks/response'
import { Container } from '.'

const apiUser = 'https://api.github.com/users/renantrs'
const apiRepo = 'https://api.github.com/users/renantrs/repos'
const apiStar = 'https://api.github.com/users/renantrs/starred'

const server = setupServer(
  rest.get(apiUser, (req, res, ctx) => {
    return res(ctx.json(mockUser))
  }),
  rest.get(apiRepo, (req, res, ctx) => {
    return res(ctx.json(mockRepos))
  }),
  rest.get(apiStar, (req, res, ctx) => {
    return res(ctx.json(mockStars))
  })
)

beforeAll(() => server.listen()) //Escuta o servidor
afterEach(() => server.resetHandlers()) //Limpa o servidor
afterAll(() => server.close()) //Fecha o servidor

const MockProvider = () => {
  return (
    <MockProv>
      <Container />
    </MockProv>
  )
}
describe('Container component', () => {
  it('Integration', async () => {
    render(<MockProvider />)

    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    const buttonElement = screen.getByText('Buscar')

    fireEvent.change(inputElement, { target: { value: 'RenanTRS' } })
    fireEvent.click(buttonElement)

    const img = await screen.findByTestId('img')
    const headings = await screen.findByRole('heading')
    const spansUser = await screen.findAllByRole('infoUser')
    const repo = await screen.findAllByRole('span')
    const topics = await screen.findAllByRole('topics')

    expect(img).toBeInTheDocument()
    expect(headings).toBeInTheDocument()
    expect(spansUser.length).toBe(4)
    expect(repo.length).toBe(4)
    expect(topics.length).toBe(3)
  })
})
