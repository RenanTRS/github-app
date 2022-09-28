import { useFetch } from 'hooks/useFetch'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { mockRepos, mockUser, mockStars } from 'services/mocks/response'

const apiUser = 'https://api.github.com/users/renantrs'
const apiRepo = 'https://api.github.com/users/renantrs/repos'
const apiStar = 'https://api.github.com/users/renantrs/starred'

//fake server
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

beforeAll(() => server.listen()) //listen to server
afterEach(() => server.resetHandlers()) //clean the server
afterAll(() => server.close()) //close the server

it('should transform json response into object', async () => {
  const data = await useFetch('renantrs')
  const repos = await useFetch('renantrs/repos')
  const star = await useFetch('renantrs/starred')

  expect(data).toStrictEqual(mockUser)
  expect(repos).toStrictEqual(mockRepos)
  expect(star).toStrictEqual(mockStars)
})
