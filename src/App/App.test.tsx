import {render, screen} from "@testing-library/react"
import App from "./App"

describe('Componentul App', () => {

  it('App e redat', () => {
    render(<App />) 
    const title = screen.getByText(/app react/i)
    expect(title).toBeInTheDocument()
  })

  // snapshot
  it('App Snapshot', () => {
    const view = render(<App />)
    expect(view).toMatchSnapshot()
  })
})
