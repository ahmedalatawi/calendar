import React from 'react'
import { describe, test, expect, jest } from '@jest/globals'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import DaySelector from './DaySelector'
import dayjs from 'dayjs'

describe('DaySelector', () => {
  test('should render the component with no props', () => {
    const component = render(<DaySelector />)

    expect(component).toBeTruthy()
    expect(component).toMatchSnapshot()
  })

  test('should apply correct className for selected date', () => {
    const { container } = render(<DaySelector date={dayjs('2002-12-10T00:00:00').toDate()} />)
    expect(container.getElementsByClassName('rc-day-selector-cell-selected').length).toBe(1)
  })

  test('should apply correct className for all 6 rows', () => {
    const { container } = render(<DaySelector date={dayjs('2002-12-10T00:00:00').toDate()} />)
    expect(container.getElementsByClassName('rc-day-selector-cell-row').length).toBe(6)
  })

  test('should apply correct className for all total cells', () => {
    const { container } = render(<DaySelector date={dayjs('2002-12-10T00:00:00').toDate()} />)
    expect(container.getElementsByClassName('rc-day-selector-cell').length).toBe(42)
  })

  test('should apply correct className for all current dates', () => {
    const { container } = render(<DaySelector date={dayjs('2002-12-10T00:00:00').toDate()} />)
    expect(container.getElementsByClassName('rc-day-selector-cell-current').length).toBe(31)
  })

  test('should render correct selected date', () => {
    const { container } = render(<DaySelector date={dayjs('2002-12-11T00:00:00').toDate()} />)
    expect(container.getElementsByClassName('rc-day-selector-cell-selected')[0].textContent).toBe('11')
  })

  test('should render correct today date', () => {
    const today = dayjs().day()
    const { container } = render(<DaySelector />)
    expect(container.getElementsByClassName('rc-day-selector-cell-today')[0].textContent).toBe(today.toString())
  })

  test('should call onSelect with the correct date when date cell is clicked', async () => {
    const date = dayjs('2002-12-20T00:00:00').toDate()
    const onSelect = jest.fn()
    const { container } = render(<DaySelector onSelect={onSelect} date={date} />)
    const cell = container.getElementsByClassName('rc-day-selector-cell-selected')[0]

    userEvent.click(cell)

    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith(date)
    })
  })

  test('should call onSelect with first date in the month', async () => {
    const date = dayjs('2002-12-20T00:00:00').toDate()
    const firstDateInMonth = dayjs('2002-12-01T00:00:00').toDate()

    const onSelect = jest.fn()

    const { container } = render(<DaySelector onSelect={onSelect} date={date} />)
    const cell = container.getElementsByClassName('rc-day-selector-cell-current')[0]

    userEvent.click(cell)

    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith(firstDateInMonth)
    })
  })

  test('should call onSelect with last date in the month', async () => {
    const date = dayjs('2002-12-20T00:00:00').toDate()
    const lastDateInMonth = dayjs('2002-12-31T00:00:00').toDate()

    const onSelect = jest.fn()

    const { container } = render(<DaySelector onSelect={onSelect} date={date} />)
    const cellsLength = container.getElementsByClassName('rc-day-selector-cell-current').length
    const cell = container.getElementsByClassName('rc-day-selector-cell-current')[cellsLength - 1]

    userEvent.click(cell)

    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith(lastDateInMonth)
    })
  })

  test('should call onSelect with first date in the calendar', async () => {
    const date = dayjs('2002-11-02T00:00:00').toDate()
    const firstDateInMonth = dayjs('2002-10-27T00:00:00').toDate()

    const onSelect = jest.fn()

    const { container } = render(<DaySelector onSelect={onSelect} date={date} />)
    const cell = container.getElementsByClassName('rc-day-selector-cell')[0]

    userEvent.click(cell)

    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith(firstDateInMonth)
    })
  })

  test('should call onSelect with last date in the calendar', async () => {
    const date = dayjs('2002-12-20T00:00:00').toDate()
    const lastDateInCalendar = dayjs('2003-01-11T00:00:00').toDate()

    const onSelect = jest.fn()

    const { container } = render(<DaySelector onSelect={onSelect} date={date} />)
    const cellsLength = container.getElementsByClassName('rc-day-selector-cell').length
    const cell = container.getElementsByClassName('rc-day-selector-cell')[cellsLength - 1]

    userEvent.click(cell)

    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith(lastDateInCalendar)
    })
  })
})
