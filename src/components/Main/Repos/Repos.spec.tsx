import { render, screen } from '@testing-library/react'
import { MockProviderRepos } from './mocks'

describe('Repos component', () => {
  it('should be able to render the project names of list', () => {
    render(<MockProviderRepos />)
    const names = screen.getAllByTestId('name')

    //first list
    expect(names[0].textContent).toBe('project-1')

    //second list
    expect(names[1].textContent).toBe('project-2')
  })

  it('should be able to render the project descriptions of list', () => {
    render(<MockProviderRepos />)
    const descriptions = screen.getAllByTestId('description')

    //first list
    expect(descriptions[0].textContent).toBe('some description')

    //second list
    expect(descriptions[1].textContent).toBe('some description 2')
  })

  it('should be able to render the project states of list', () => {
    render(<MockProviderRepos />)
    const states = screen.getAllByTestId('states')

    //first list
    expect(states[0].textContent).toBe('1')
    expect(states[1].textContent).toBe('2')
    expect(states[2].textContent).toBe('3')

    //second list
    expect(states[3].textContent).toBe('2')
    expect(states[4].textContent).toBe('3')
    expect(states[5].textContent).toBe('4')
  })

  it('should be able to render the project topics of list', () => {
    render(<MockProviderRepos />)
    const topics = screen.getAllByTestId('topics')

    //first list
    expect(topics[0].textContent).toBe('css')

    //second list
    expect(topics[1].textContent).toBe('css')
    expect(topics[2].textContent).toBe('html')
  })
})
