import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { describe, test, expect, jest } from '@jest/globals'
import YearSelector from './YearSelector'
import dayjs from 'dayjs'

describe('YearSelector', () => {
  const date = dayjs('2022-01-01')
  const selectedDate = dayjs('2022-01-01')
  const onSelect = jest.fn()

  test('renders the component', () => {
    render(<YearSelector date={date} selectedDate={selectedDate} onSelect={onSelect} />)
  })

  test('renders the correct number of cells', () => {
    const { container } = render(<YearSelector date={date} selectedDate={selectedDate} />)
    const cells = container.getElementsByClassName('rc-year-selector-cell')
    expect(cells.length).toBe(12) // 3 columns x 4 rows = 12 cells
  })

  test('calls onSelect when a year is selected', () => {
    const { container } = render(<YearSelector date={date} selectedDate={selectedDate} onSelect={onSelect} />)
    const cells = container.getElementsByClassName('rc-year-selector-cell')
    fireEvent.click(cells[0])
    expect(onSelect).toHaveBeenCalledWith(date.subtract(3, 'year').subtract(2, 'day'))
  })
})
