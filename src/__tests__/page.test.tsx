import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Automated/i)
  })

  it('contains the GitHub Actions link', () => {
    render(<Home />)
    const link = screen.getByText(/GitHub Actions/i)
    expect(link).toBeInTheDocument()
  })

  it('contains the Docker image link', () => {
    render(<Home />)
    const link = screen.getByText(/Pull Docker Image/i)
    expect(link).toBeInTheDocument()
  })
})