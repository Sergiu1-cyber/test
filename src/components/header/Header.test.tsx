import {render, screen} from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('Render Header', () => {
    render(<Header />)
    expect(screen.getByText(/react testing app/i)).toBeInTheDocument()
  })
})
