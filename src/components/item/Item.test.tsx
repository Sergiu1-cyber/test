import {render, screen, fireEvent} from '@testing-library/react'
import {IList} from '../../types/list'
import Item from './Item'

describe('Item List', () => {

  const mockItem: IList = {
    id: 543673,
    title: 'Item 1'
  }

  const mokRemove = jest.fn()

  it('Render Item', () => {
    render(<Item item={mockItem} Remove={mokRemove}/>)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(screen.getByText(mockItem.title)).toBeInTheDocument()
  })

  it('work Remove', () => {
    render(<Item item={mockItem} Remove={mokRemove}/>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mokRemove).toHaveBeenCalledTimes(1)
  }) 

})
