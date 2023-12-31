import React from 'react'
import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import DaySelector from './DaySelector'

describe('DaySelector', () => {
  test('should render the component', () => {
    const component = render(<DaySelector />)

    expect(component).toBeTruthy()
  })

  //   it('should render the component with the correct day', () => {
  //     render(<DaySelector day={1} />)
  //     expect(screen.getByTestId('day-selector')).toHaveTextContent('1')
  //   })

  //   it('should call the onClick function when clicked', () => {
  //     const onClick = jest.fn()
  //     render(<DaySelector onClick={onClick} />)
  //     userEvent.click(screen.getByTestId('day-selector'))
  //     expect(onClick).toHaveBeenCalled()
  //   })
})
