import { render, screen } from '@testing-library/react'
import { AddTask } from '../../../src/components/AddTask'

describe('<AddTask />', () => {
  it('should render AddTask', () => {
    render(
      <AddTask />
    )

    expect(screen.getByText('AddTask')).toBeInTheDocument()
  })
})
