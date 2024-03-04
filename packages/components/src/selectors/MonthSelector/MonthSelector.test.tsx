import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { describe, test, expect, jest } from '@jest/globals'
import MonthSelector from './MonthSelector'
import dayjs from 'dayjs'

describe('MonthSelector', () => {
  const date = dayjs('2022-01-01')
  const selectedDate = dayjs('2022-01-01')
  const onSelect = jest.fn()

  test('renders without errors', () => {
    render(<MonthSelector date={date} selectedDate={selectedDate} onSelect={onSelect} />)
  })

  test('displays the correct number of cells', () => {
    const { container } = render(<MonthSelector date={date} selectedDate={selectedDate} onSelect={onSelect} />)
    const cells = container.getElementsByClassName('rc-month-selector-cell')
    expect(cells.length).toBe(12) // Assuming there are 12 months in a year
  })

  test('calls onSelect when a month is selected', () => {
    const { container } = render(<MonthSelector date={date} selectedDate={selectedDate} onSelect={onSelect} />)
    const cells = container.getElementsByClassName('rc-month-selector-cell')
    fireEvent.click(cells[5])
    expect(onSelect).toHaveBeenCalledWith(dayjs('2022-05-26'))
  })
})
