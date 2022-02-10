import { render, screen } from '@testing-library/react'
import { Header } from '../../../src/components/Header'

describe('<Header />', () => {
  it('should render Header', () => {
    render(
      <Header />
    )

    expect(screen.getByText('Header')).toBeInTheDocument()
  })
})
