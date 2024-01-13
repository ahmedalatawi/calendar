import React, { useState } from 'react'
import ChevronLeftIcon from '../../icons/ChevronLeftIcon'
import ChevronRightIcon from '../../icons/ChevronRightIcon'
import { addMonth, getMonth, getMonthsShort, getTodayDate, getYear } from '../../utils/dayjsUtil'
import { Dayjs } from 'dayjs'
import { isEqualDate } from '../../utils/dates'

interface Props {
  date?: Dayjs
  onSelect?: (date: Dayjs) => void
  onClickMonth?: (month: number) => void
  onClickYear?: (year: number) => void
}

function HeaderSelector({ date, onSelect, onClickMonth, onClickYear }: Props) {
  const today = getTodayDate()
  const shortMonths = getMonthsShort()

  const initialDate = date ?? today

  const [selectedDate, setSelectedDate] = useState(initialDate)

  if (!isEqualDate(initialDate, selectedDate)) {
    setSelectedDate(initialDate)
  }

  const month = getMonth(selectedDate)
  const year = getYear(selectedDate)

  const handleOnNextMonth = () => {
    const date = addMonth(selectedDate, 1)
    setSelectedDate(date)
    onSelect?.(date)
  }

  const handleOnPrevMonth = () => {
    const date = addMonth(selectedDate, -1)
    setSelectedDate(date)
    onSelect?.(date)
  }

  return (
    <div className='rc-header-selector'>
      <ChevronLeftIcon onClick={() => handleOnPrevMonth()} />
      <div className='rc-header-selector-container'>
        <span className='rc-header-selector-title' onClick={() => onClickMonth?.(month)}>
          {shortMonths[month]}
        </span>
        <span className='rc-header-selector-title' onClick={() => onClickYear?.(year)}>
          {year}
        </span>
      </div>
      <ChevronRightIcon onClick={() => handleOnNextMonth()} />
    </div>
  )
}

export default HeaderSelector
