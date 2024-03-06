import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { describe, test, expect, jest } from '@jest/globals'
import DatePicker from './DatePicker'

describe('DatePicker', () => {
  test('renders without crashing', () => {
    render(<DatePicker />)
  })

  //   test('displays the selected date', () => {
  //     const { getByText } = render(<DatePicker />)
  //     const selectedDate = '2022-01-01'
  //     fireEvent.change(getByText('Select Date'), { target: { value: selectedDate } })
  //     expect(getByText(selectedDate)).toBeDefined()
  //   })

  //   it('calls the onChange handler when a date is selected', () => {
  //     const handleChange = jest.fn()
  //     const { getByText } = render(<DatePicker onChange={handleChange} />)
  //     const selectedDate = '2022-01-01'
  //     fireEvent.change(getByText('Select Date'), { target: { value: selectedDate } })
  //     expect(handleChange).toHaveBeenCalledWith(selectedDate)
  //   })
})
