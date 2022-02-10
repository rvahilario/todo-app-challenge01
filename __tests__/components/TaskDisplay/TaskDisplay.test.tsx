import { render, screen } from '@testing-library/react'
import { TaskDisplay } from '../../../src/components/TaskDisplay'

describe('<TaskDisplay />', () => {
  it('should render TaskDisplay', () => {
    render(
      <TaskDisplay />
    )

    expect(screen.getByText('TaskDisplay')).toBeInTheDocument()
  })
})
