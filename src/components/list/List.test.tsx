import {render, screen} from '@testing-library/react'
import {IList} from '../../types/list'
import List from "./List"

describe('List', () => {

  const mockList: IList[] = [
    {id: 1, title: 'Item 1'},
    {id: 2, title: 'Item 2'},
    {id: 3, title: 'Item 3'}
  ]

  const mockRemove = jest.fn()

  it('Render List', () => {
    render(<List list={mockList} removeItem={mockRemove}/>)
    expect(screen.getByText(mockList[0].title)).toBeInTheDocument()
    expect(screen.getByText(mockList[1].title)).toBeInTheDocument()
    expect(screen.getByText(mockList[2].title)).toBeInTheDocument()
  })
})
