import {render, screen} from '@testing-library/react'
import Input from './Input'

describe('Input', () => {

  it('Render Input', () => {
    render(<Input />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
