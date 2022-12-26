import {render, screen, fireEvent} from '@testing-library/react'
import Input from './Input'

describe('Input', () => {

  const AddItem = jest.fn()

  it('Render Input', () => {
    render(<Input addItem={AddItem}/>)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('Click Button', () => { 
    render(<Input addItem={AddItem}/>)
    const button = screen.getByText(/save/i)
    fireEvent.click(button)
    expect(AddItem).toHaveBeenCalledTimes(1)
  })

})
