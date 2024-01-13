import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { describe, test, expect, jest } from '@jest/globals'
import HeaderSelector from './HeaderSelector'
import { getMonth, getMonthsShort, getTodayDate, getYear } from '../../utils/dayjsUtil'
import dayjs from 'dayjs'

import '@testing-library/jest-dom'

describe('HeaderSelector', () => {
  test('should render the component with no props', () => {
    const component = render(<HeaderSelector />)

    expect(component).toBeTruthy()
    expect(component).toMatchSnapshot()
  })

  test('should render current month and year by default', () => {
    const today = getTodayDate()
    const month = getMonth(today)
    const year = getYear(today)

    const shortMonths = getMonthsShort()

    const { container } = render(<HeaderSelector />)

    expect(container.getElementsByClassName('rc-header-selector-title')[0].textContent).toBe(shortMonths[month])
    expect(container.getElementsByClassName('rc-header-selector-title')[1].textContent).toBe(year.toString())
  })

  test('should render correct month and year when date is passed in', () => {
    const date = dayjs('2002-12-11T00:00:00')

    const { container } = render(<HeaderSelector date={date} />)

    expect(container.getElementsByClassName('rc-header-selector-title')[0].textContent).toBe('Dec')
    expect(container.getElementsByClassName('rc-header-selector-title')[1].textContent).toBe('2002')
  })

  test('should call onSelect with the correct date when prev or next icon is clicked', async () => {
    const date = dayjs('2002-12-11T00:00:00')
    const onSelectMock = jest.fn()

    const { container } = render(<HeaderSelector date={date} onSelect={onSelectMock} />)

    const prevIcon = container.getElementsByClassName('rc-icon')[0]
    const nextIcon = container.getElementsByClassName('rc-icon')[1]

    fireEvent.click(prevIcon)

    await waitFor(() => {
      expect(onSelectMock).toHaveBeenCalledWith(dayjs('2002-11-11T00:00:00'))
    })

    fireEvent.click(nextIcon)

    await waitFor(() => {
      expect(onSelectMock).toHaveBeenCalledWith(dayjs('2003-01-11T00:00:00'))
    })
  })

  test('should call onClickMonth with the correct month when month is clicked', async () => {
    const date = dayjs('2002-12-11T00:00:00')
    const onClickMonthMock = jest.fn()

    const { getByText } = render(<HeaderSelector date={date} onClickMonth={onClickMonthMock} />)

    const month = getByText('Dec')

    fireEvent.click(month)

    await waitFor(() => {
      expect(onClickMonthMock).toHaveBeenCalledWith(11)
    })
  })

  test('should call onClickYear with the correct year when year is clicked', async () => {
    const date = dayjs('2002-12-11T00:00:00')
    const onClickYearMock = jest.fn()

    const { getByText } = render(<HeaderSelector date={date} onClickYear={onClickYearMock} />)

    const year = getByText('2002')

    fireEvent.click(year)

    await waitFor(() => {
      expect(onClickYearMock).toHaveBeenCalledWith(2002)
    })
  })
})
