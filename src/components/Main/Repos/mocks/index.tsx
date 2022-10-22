import { Provider } from 'react-redux'
import { store } from 'store'
import { Repos } from '..'

export const MockProviderRepos = () => {
  const project1 = {
    name: 'project-1',
    description: 'some description',
    url: 'http://someurl',
    issues: { totalCount: 2 },
    forkCount: 1,
    stargazerCount: 3,
    repositoryTopics: {
      nodes: [{ topic: { name: 'css' } }]
    }
  }
  const project2 = {
    name: 'project-2',
    description: 'some description 2',
    url: 'http://someurl2',
    issues: { totalCount: 3 },
    forkCount: 2,
    stargazerCount: 4,
    repositoryTopics: {
      nodes: [{ topic: { name: 'css' } }, { topic: { name: 'html' } }]
    }
  }

  const mock = [project1, project2]

  return (
    <Provider store={store}>
      <Repos dataRepos={mock} />
    </Provider>
  )
}
